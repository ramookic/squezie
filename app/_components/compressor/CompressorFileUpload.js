"use client";

import { useState } from "react";
import { useImageCompressor } from "../../_contexts/compressor/context";
import Link from "next/link";
import clsx from "clsx";
import { PiUploadBold } from "react-icons/pi";
import CompressorInput from "./CompressorInput";

export default function CompressorFileUpload({ inputRef }) {
  const { handleFileUpload } = useImageCompressor();
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    handleFileUpload(files);
  }

  return (
    <div className="h-full m-[20px] flex flex-col pb-10 gap-4">
      <CompressorInput inputRef={inputRef} />
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={clsx(
          "flex-1 flex flex-col gap-2 justify-center items-center outline-3 outline-dashed outline-gray-200 rounded-3xl transition-all ease-in-out",
          isDragging && " outline-brand-500 bg-brand-50"
        )}
      >
        <button
          onClick={() => inputRef.current.click()}
          className="bg-brand-500 text-grey-0 font-semibold pl-8 pr-4 py-4 rounded-full hover:bg-brand-600 transition-all ease-in-out flex items-center gap-4"
        >
          Browse files
          <span className="bg-white text-brand-500 p-2 rounded-full">
            <PiUploadBold size={20} />
          </span>
        </button>
        <p className="text-sm text-grey-500">or drop files here</p>
      </div>
      <p className="text-gray-500 text-sm">
        By using our compressor, you accept our{" "}
        <Link href="/terms-and-conditions" className="font-bold text-gray-800">
          Terms and Conditions
        </Link>{" "}
        of use and our{" "}
        <Link href="/privacy-policy" className="font-bold text-gray-800">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
