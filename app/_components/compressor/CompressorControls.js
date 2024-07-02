"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import { BiArchiveIn, BiCog, BiTrash } from "react-icons/bi";

export default function CompressorControls({ showOptions, setShowOptions }) {
  const { reset, downloadZip } = useImageCompressor();

  function handleReset() {
    if (showOptions) setShowOptions(false);
    reset();
  }

  return (
    <div className="border-b border-grey-200 flex justify-between py-4 px-4">
      <div className="flex gap-2">
        <button
          className="bg-grey-50 gap-1 px-4 py-[10px] rounded-full font-semibold flex items-center"
          onClick={handleReset}
        >
          <BiTrash size={16} />
          <span className="hidden md:block">Remove All</span>
        </button>
        <button
          className="bg-grey-50 gap-1 px-4 py-[10px] rounded-full font-semibold flex items-center"
          onClick={() => setShowOptions(!showOptions)}
        >
          <BiCog size={16} />
          Options
        </button>
      </div>
      <button
        className="bg-grey-800 text-grey-0 px-4 py-[10px] rounded-full font-semibold flex items-center gap-1"
        onClick={downloadZip}
      >
        <BiArchiveIn size={16} />
        Download Zip
      </button>
    </div>
  );
}
