"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import CompressorFileItem from "./CompressorFileItem";

export default function CompressorFileList() {
  const { state } = useImageCompressor();
  return (
    <div className="flex flex-col gap-3 py-4 px-3 h-[74.8%] overflow-y-scroll scrollbar">
      {state.completedFiles.map((file, index) => (
        <CompressorFileItem
          key={file.fileID}
          index={index}
          data={file}
        ></CompressorFileItem>
      ))}
    </div>
  );
}
