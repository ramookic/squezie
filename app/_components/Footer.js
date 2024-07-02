import Link from "next/link";
import Logo from "./Logo";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-grey-950 pt-20 flex flex-col gap-20">
      <div className="container mx-auto flex items-center flex-col gap-10 text-center justify-center text-grey-500">
        <div className="flex justify-center items-center flex-col gap-4 ">
          <Logo isDark />
          <p className=" max-w-[600px]">
            The fastest and most efficient web-based image compression tool.
            Optimize your images quickly and securely without any hassle.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="transition-all hover:text-grey-100"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="transition-all hover:text-grey-100"
            href="/#features"
          >
            FAQ
          </Link>
        </div>
      </div>
      <div className="container mx-auto border-t border-grey-800 text-grey-500 flex gap-4 items-center flex-col-reverse py-8 justify-between md:flex-row">
        <p>
          &copy; {currentYear} Squezie - Made with{" "}
          <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://github.com/ramookic"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            ramookic
          </a>
        </p>
        <div className="flex gap-4">
          <Link
            href="/terms-and-conditions"
            className="transition-all hover:text-grey-100"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="transition-all hover:text-grey-100 "
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
