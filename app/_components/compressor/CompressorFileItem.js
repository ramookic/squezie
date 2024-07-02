"use client";

import { useImageCompressor } from "@/app/_contexts/compressor/context";
import { readableFileSize } from "@/app/_contexts/compressor/utils";
import { BiDownload, BiRightArrowAlt, BiZoomIn } from "react-icons/bi";
import CompressorImageCompare from "./CompressorImageCompare";
import { useState } from "react";

export default function CompressorFileItem({ data, index }) {
  const { downloadFile } = useImageCompressor();
  const { fileID, fileName, sizeBefore, sizeAfter, image } =
    data;
  const [showCompare, setShowCompare] = useState(false);

  const percentage = Math.round(((sizeAfter - sizeBefore) / sizeBefore) * 100);

  return (
    <>
      <div className="flex justify-between items-center bg-grey-50/50 px-3 py-2 rounded-[10px] duration-300 ease-in-out hover:scale-[1.02]">
        <div className="flex gap-2">
          <div
            className="relative w-[70px] h-[50px] rounded-[10px] bg-grey-200 cursor-pointer group"
            onClick={() => setShowCompare(!showCompare)}
          >
            <img
              className="w-[70px] h-[50px] object-contain rounded-[10px] group-hover:opacity-80 transition-all ease-in-out"
              src={URL.createObjectURL(image)}
              alt={`compressed-image_${fileName}`}
            />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0  text-grey-0 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-grey-800/30 rounded-[10px] transition-all ease-in-out">
              <BiZoomIn size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis text-left md:max-w-[350px]">
              {fileName}
            </p>
            <div className="flex items-center font-medium text-sm">
              <span className="text-grey-500">
                {readableFileSize(sizeBefore)}
              </span>
              <BiRightArrowAlt className="text-grey-500" />
              <span className="text-grey-800 bg-green-200 px-2 rounded-full font-semibold">
                {readableFileSize(sizeAfter)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <h4 className="text-grey-800 text-2xl relative flex font-black mr-2">
            {percentage}{" "}
            <span className="font-normal text-base text-grey-500">%</span>
          </h4>
          <button
            className="flex items-center justify-center p-2 rounded-full text-xl hover:bg-blue-200 duration-100 ease-in-out"
            onClick={() => downloadFile(index)}
          >
            <BiDownload />
          </button>
        </div>
      </div>
      {showCompare && (
        <CompressorImageCompare
          imageId={fileID}
          setShowCompare={setShowCompare}
        />
      )}
    </>
  );
}
