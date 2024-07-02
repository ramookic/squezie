import { useImageCompressor } from "@/app/_contexts/compressor/context";

export default function CompressorOptions({ setShowOptions }) {
  const {
    state,
    handleMaxWHChange,
    handlePrefixChange,
    handleQualityChange,
    recompress,
  } = useImageCompressor();

  function handleRecompress() {
    setShowOptions(false);
    recompress();
  }

  return (
    <div className="z-30 bg-white top-[78px] absolute w-full h-[calc(100%-78px)] rounded-bl-[28px] rounded-br-[28px] py-4 px-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Title
          title="Change Quality"
          description="Change compressed image quality"
        />
        <div>
          <div className="flex justify-between items-center gap-6">
            <input
              className="relative w-full h-[20px]"
              type="range"
              min="0.1"
              max="0.9"
              step="0.1"
              value={state.quality}
              onChange={(e) => handleQualityChange(e.target.value)}
            />
            <h2 className="text-3xl font-black flex">
              {state.quality * 100}
              <span className="font-normal text-base text-grey-500">%</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Title
          title="Max Width and Height"
          description="Set maximum image width and height"
        />
        <input
          type="number"
          value={state.maxWH || ""}
          placeholder="ex. 4000"
          onChange={(e) => handleMaxWHChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Title
          title="Add File Suffix"
          description="Add a word at the end of each file"
        />
        <input
          type="text"
          placeholder="ex. -tiny"
          value={state.imagePrefix}
          onChange={(e) => handlePrefixChange(e.target.value)}
        />
      </div>
      <button
        className="absolute bottom-0 left-0 flex items-center justify-center gap-2 border-t border-grey-200 w-full py-4 hover:bg-grey-50/50 rounded-bl-[28px] rounded-br-[28px] transition-all ease-in-out font-semibold text-grey-800 cursor-pointer disabled:bg-grey-100 disabled:text-grey-500"
        disabled={!state.allowRecompress}
        onClick={handleRecompress}
      >
        Recompress
      </button>
    </div>
  );
}

function Title({ title, description }) {
  return (
    <div>
      <h4 className="font-semibold text-left">{title}</h4>
      <p className="text-left text-sm text-grey-500">{description}</p>
    </div>
  );
}
