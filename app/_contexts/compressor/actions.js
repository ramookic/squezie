import { saveAs } from "file-saver";
import JSZip from "jszip";
import { createUUID, generateName } from "./utils";
import imageCompression from "browser-image-compression";
import toast from "react-hot-toast";

export function useActions(state, dispatch) {
  const options = {
    maxSizeMB: state.quality,
    maxWidthOrHeight: state.maxWH,
    useWebWorker: true,
  };

  async function handleFileUpload(files) {
    const invalidFile = Array.from(files).some((file) => {
      if (!file.type.startsWith("image/")) {
        toast.error("Invalid file type");
        return true;
      }
      return false;
    });

    if (invalidFile) return;

    setIsPending(true);

    const originalFiles = Array.from(files).map((file) => ({
      originalFileID: createUUID(),
      fileName: generateName(file.name, state.imagePrefix),
      sizeBefore: parseFloat(file.size.toFixed(1)),
      file: file,
    }));

    dispatch({
      type: "SET_UPLOADED_FILES",
      payload: originalFiles,
    });

    let pendingFiles = originalFiles.length;

    for (const {
      file,
      originalFileID,
      sizeBefore,
      fileName,
    } of originalFiles) {
      try {
        const compressedFile = await imageCompression(file, options);

        const newFile = {
          fileID: createUUID(),
          originalFileID,
          fileName,
          sizeBefore,
          sizeAfter: parseFloat(compressedFile.size.toFixed(1)),
          image: compressedFile,
        };

        dispatch({
          type: "SET_COMPRESSED_FILES",
          payload: [newFile],
        });

        pendingFiles--;

        if (pendingFiles === 0) {
          dispatch({ type: "SET_COMPLETED_FILES" });
        }
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: `Compression error: ${err.message}`,
        });
      }
    }
  }

  async function recompress() {
    setIsPending(true);
    dispatch({ type: "CHANGE_COMPRESSED_FILES" });

    let pendingFiles = state.uploadedFiles.length;

    for (const { originalFileID, sizeBefore, file } of state.uploadedFiles) {
      try {
        const compressedFile = await imageCompression(file, options);

        const newFile = {
          fileID: createUUID(),
          originalFileID,
          fileName: generateName(file.name, state.imagePrefix),
          sizeBefore,
          sizeAfter: parseFloat(compressedFile.size.toFixed(1)),
          image: compressedFile,
        };

        dispatch({ type: "SET_COMPRESSED_FILES", payload: [newFile] });
        pendingFiles--;

        if (pendingFiles === 0) {
          dispatch({ type: "SET_COMPLETED_FILES" });
        }
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: `Compression error: ${err.message}`,
        });
      }
    }
  }

  function handleQualityChange(value) {
    handleAllowRecompress();
    const parsedValue = parseFloat(value);
    dispatch({ type: "SET_QUALITY", payload: parsedValue });
  }

  function handleMaxWHChange(value) {
    handleAllowRecompress();

    const parsedValue = parseFloat(value);

    if (value === 0) {
      dispatch({ type: "SET_MAX_WH", payload: undefined });
      return;
    }

    dispatch({ type: "SET_MAX_WH", payload: parsedValue });
  }

  function handlePrefixChange(value) {
    handleAllowRecompress();
    dispatch({ type: "SET_IMAGE_PREFIX", payload: value });
  }

  function handleAllowRecompress() {
    if (state.uploadedFiles.length === 0) return;

    dispatch({ type: "SET_ALLOW_RECOMPRESS" });
  }

  async function downloadZip() {
    try {
      const zip = new JSZip();
      state.completedFiles.forEach((file) => {
        zip.file(file.fileName, file.image);
      });
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "squezie");
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: "An error occurred while generating the zip file.",
      });
    }
  }

  function downloadFile(fileID) {
    const file = state.completedFiles[fileID];
    if (!file) {
      dispatch({
        type: "SET_ERROR",
        payload: "An error occurred while downloading the file.",
      });
    }
    saveAs(file.image, file.fileName);
  }

  function setIsPending(value) {
    dispatch({ type: "SET_IS_PENDING", payload: value });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    handleFileUpload,
    recompress,
    handleQualityChange,
    handleMaxWHChange,
    handlePrefixChange,
    downloadFile,
    downloadZip,
    setIsPending,
    reset,
  };
}
