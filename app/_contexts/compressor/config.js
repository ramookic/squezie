export const LOCAL_STORAGE_KEYS = {
  quality: "compressor_quality",
  maxWH: "compressor_maxWH",
  imagePrefix: "compressor_imagePrefix",
  preserveExif: "compressor_preserveExif",
};

export const INITIAL_STATE = {
  compressedFiles: [],
  uploadedFiles: [],
  completedFiles: [],
  quality: 0.7,
  maxWH: undefined,
  imagePrefix: "",
  alwaysKeepResolution: true,
  preserveExif: false,
  isPending: false,
  allowRecompress: false,
  error: false,
  errorMessage: "",
};

export const FORMATS = ["image/jpeg", "image/png", "image/webp", "image/webp"];
