"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";

export default function CompressorInput({ inputRef }) {
  const { handleFileUpload } = useImageCompressor();

  function handleAdd(e) {
    handleFileUpload(e.target.files);
  }

  return (
    <input
      ref={inputRef}
      type="file"
      accept=".jpg, .jpeg, .png, .bmp"
      onChange={handleAdd}
      hidden
      multiple
    />
  );
}
