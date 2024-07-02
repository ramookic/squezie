"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import CompressorFileUpload from "./CompressorFileUpload";
import { useRef, useState } from "react";
import CompressorLoader from "./CompressorLoader";
import CompressorFileList from "./CompressorFileList";
import CompressorControls from "./CompressorControls";
import CompressorInput from "./CompressorInput";
import CompressorOptions from "./CompressorOptions";

export default function CompressorContainer() {
  const { state } = useImageCompressor();
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="h-[540px] max-w-[700px] relative w-full border border-grey-200 rounded-[28px] bg-white">
      {state.isPending && <CompressorLoader />}
      {state.uploadedFiles.length > 0 && (
        <>
          <CompressorControls
            showOptions={showOptions}
            setShowOptions={setShowOptions}
          />
          <CompressorFileList />
          <button
            onClick={() => inputRef.current.click()}
            className="absolute bottom-0 left-0 flex items-center justify-center gap-2 border-t border-grey-200 w-full py-4 hover:bg-grey-50/50 rounded-bl-[28px] rounded-br-[28px] transition-all ease-in-out font-bold text-grey-800"
          >
            Add more files
          </button>
          {showOptions && <CompressorOptions setShowOptions={setShowOptions} />}
          <CompressorInput inputRef={inputRef} />
        </>
      )}
      {state.uploadedFiles.length === 0 && (
        <>
          <CompressorFileUpload inputRef={inputRef} />
          <CompressorInput inputRef={inputRef} />
        </>
      )}
    </div>
  );
}
