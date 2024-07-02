import { INITIAL_STATE } from "./config";

export function imageCompressorReducer(state, action) {
  switch (action.type) {
    case "SET_UPLOADED_FILES":
      return {
        ...state,
        uploadedFiles: [...state.uploadedFiles, ...action.payload],
      };
    case "SET_COMPRESSED_FILES":
      return {
        ...state,
        compressedFiles: [...state.compressedFiles, ...action.payload],
      };
    case "CHANGE_COMPRESSED_FILES":
      return {
        ...state,
        compressedFiles: [],
        allowRecompress: false,
      };
    case "SET_COMPLETED_FILES":
      return {
        ...state,
        completedFiles:
          state.compressedFiles.length === 0
            ? state.completedFiles
            : state.compressedFiles,
        isPending: false,
        allowRecompress: false,
      };
    case "SET_QUALITY":
      return {
        ...state,
        quality: action.payload,
      };
    case "SET_MAX_WH":
      return {
        ...state,
        maxWH: action.payload,
      };
    case "SET_IMAGE_PREFIX":
      return {
        ...state,
        imagePrefix: action.payload,
      };
    case "SET_IS_PENDING":
      return {
        ...state,
        isPending: action.payload,
      };
    case "SET_ALLOW_RECOMPRESS":
      return {
        ...state,
        allowRecompress: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        isPending: false,
      };
    case "RESET":
      return INITIAL_STATE;
    default:
      return state;
  }
}
