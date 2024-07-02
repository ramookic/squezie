"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import { readableFileSize } from "@/app/_contexts/compressor/utils";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { BiX } from "react-icons/bi";

export default function CompressorImageCompare({ imageId, setShowCompare }) {
  const { state } = useImageCompressor();
  const compressedImage = state.completedFiles.filter(
    (file) => file.fileID === imageId
  );
  const originalImage = state.uploadedFiles.filter(
    (file) => file.originalFileID === compressedImage[0].originalFileID
  );

  function closeCompare() {
    setShowCompare(false);
  }

  return (
    <div className="fixed z-[100] top-0 left-0 bg-grey-800/70 w-screen h-screen flex items-center justify-center">
      <button
        onClick={closeCompare}
        className="fixed bg-grey-50 text-2xl gap-1 p-2 rounded-full font-semibold border border-grey-200 flex items-center top-4 right-4"
      >
        <BiX />
      </button>
      <ImgComparisonSlider className="w-[800px] h-[600px] border-none outline-none bg-grey-50 rounded-2xl">
        <figure slot="first" className="w-full h-[600px]">
          <img
            className="w-full h-full bg-grey-50 object-cover"
            src={URL.createObjectURL(originalImage[0].file)}
          />
          <p className="absolute top-6 left-4 bg-grey-800/30 backdrop-blur-sm px-4 py-2 rounded-full text-grey-0">
            Before:{" "}
            <span className="font-semibold">
              {readableFileSize(compressedImage[0].sizeBefore)}
            </span>
          </p>
        </figure>
        <figure slot="second" className="w-full h-[600px]">
          <img
            className="w-full h-full bg-grey-50 object-cover"
            src={URL.createObjectURL(compressedImage[0].image)}
          />
          <p className="absolute top-6 right-4 bg-grey-800/30 backdrop-blur-sm px-4 py-[18.8px] rounded-full text-grey-0">
            After:{" "}
            <span className="font-semibold">
              {readableFileSize(compressedImage[0].sizeAfter)}
            </span>
          </p>
        </figure>
      </ImgComparisonSlider>
    </div>
  );
}
