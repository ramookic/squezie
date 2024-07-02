import Link from "next/link";
import { BiAperture } from "react-icons/bi";

export default function Logo({ isDark }) {
  return (
    <Link
      href="/"
      className={`font-black text-[26px] flex items-center relative gap-2 z-10 group w-fit ${
        isDark ? "text-grey-0" : "text-grey-900"
      }`}
    >
      <span
        className={`text-[26px] p-1 rounded-xl relative top-[2px]  ${
          isDark ? "text-grey-900 bg-grey-0 " : "bg-grey-900 text-grey-0"
        }`}
      >
        <BiAperture className="group-hover:rotate-90 transition-all transition-[0.6s ease] " />
      </span>
      squezie
    </Link>
  );
}
