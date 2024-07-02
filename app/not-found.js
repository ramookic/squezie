import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-neutral-50/60 h-screen">
      <div className="h-full container mx-auto flex justify-center items-center flex-col text-center gap-2">
        <h1 className="font-black text-7xl text-grey-950">404</h1>
        <p className="text-grey-500 max-w-[500px]">
          Sorry the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-grey-50 gap-1 px-4 py-[10px] rounded-full font-semibold flex items-center"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
