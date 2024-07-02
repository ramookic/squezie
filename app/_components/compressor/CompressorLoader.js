"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export default function CompressorLoader() {
  const { state, progress } = useImageCompressor();
  const { uploadedFiles, compressedFiles } = state;

  return (
    <div className="z-30 absolute w-full h-full rounded-[28px] bg-white flex justify-center items-center flex-col gap-4">
      <CircularProgressbarWithChildren
        className="h-[200px] font-semibold animate-[rotateLoader_8s_linear_infinite]"
        lassName="progress"
        value={progress}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "round",
          textSize: "22px",
          pathTransitionDuration: 0.5,
          pathColor: `#2E90FA`,
          path: {
            transition: "stroke-dashoffset 0.5s ease 0s",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          textColor: "#1F242F",
          trailColor: "#F5F5F6",
        })}
      >
        <h2 className="text-[56px] font-bold flex gap-1">
          {progress.toFixed()}{" "}
          <span className="text-[20px] font-normal text-grey-500 top-4 relative">
            %
          </span>
        </h2>
      </CircularProgressbarWithChildren>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg text-grey-800">
          {progress.toFixed() === 0 ? "Starting..." : "Compressing..."}
        </h3>
        <p className="text-grey-500">
          <strong className="text-grey-800">{compressedFiles.length} </strong>
          out of
          <strong className="text-grey-800"> {uploadedFiles.length} </strong>
          done
        </p>
      </div>
      <button
        className="absolute bottom-0 left-0 flex items-center justify-center gap-2 border-t border-grey-200 w-full py-4 hover:bg-grey-50/50 rounded-bl-[28px] rounded-br-[28px] transition-all ease-in-out font-semibold text-grey-800"
        onClick={() => window.location.reload()}
      >
        Cancel
      </button>
    </div>
  );
}
