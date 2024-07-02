import Faq from "./_components/Faq";
import Features from "./_components/Features";
import CompressorContainer from "./_components/compressor/CompressorContainer";

export default function Page() {
  return (
    <div className="flex flex-col text-center items-center gap-40 mb-40">
      <div className="bg-neutral-50/60 w-full pt-44 pb-32 flex flex-col items-center justify-center gap-10 relative shadow-custom-inset">
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 w-full h-full -z-10"
        >
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="6"
              cy="6"
              r="1.6257413380501518"
              fill="#CECFD2"
            ></circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
        <div className="flex flex-col gap-4 text-center justify-center items-center container mx-auto">
          <h1 className="font-black text-5xl text-grey-950">
            Compress your images in bulk
          </h1>
          <p className="text-grey-500 max-w-[500px]">
            The fastest and most efficient web-based image compression tool.
            Optimize your images quickly and securely without any hassle.
          </p>
        </div>
        <CompressorContainer />
      </div>
      <Features />
      <Faq />
    </div>
  );
}
