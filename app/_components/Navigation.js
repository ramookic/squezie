"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogoGithub, BiMenuAltRight, BiX } from "react-icons/bi";
import Logo from "./Logo";
import clsx from "clsx";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ease-in-out ${
        isScrolled ? "bg-grey-0/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
        <Logo />
        <div
          className={clsx(
            "flex gap-4 px-2",
            isOpen
              ? "flex fixed top-0 left-0 w-screen h-screen bg-white z-0 flex-col pt-32 md:relative md:h-auto md:w-auto md:flex-row md:pt-0 md:bg-transparent"
              : "hidden md:flex"
          )}
        >
          <Link
            href="/#features"
            onClick={() => setIsOpen(false)}
            className="text-grey-800 text-md md:text-base font-semibold hover:bg-grey-50 px-4 py-2 rounded-full w-fit"
          >
            Features
          </Link>
          <Link
            href="/#faq"
            onClick={() => setIsOpen(false)}
            className="text-grey-800 text-md md:text-base font-semibold hover:bg-grey-50 px-4 py-2 rounded-full w-fit"
          >
            FAQ
          </Link>
          <Link
            href="/privacy-policy"
            onClick={() => setIsOpen(false)}
            className="text-grey-800 text-md md:text-base font-semibold hover:bg-grey-50 px-4 py-2 rounded-full w-fit"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex items-center gap-4 z-10">
          <Link
            href="https://github.com/ramookic"
            rel="noreferrer"
            target="_blank"
            className="py-3 px-6 inline-flex items-center gap-x-2 font-semibold rounded-full  text-gray-50 bg-grey-900 shadow-sm"
          >
            <BiLogoGithub size={20} /> Check Code
          </Link>
          <button
            className="flex md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX /> : <BiMenuAltRight />}
          </button>
        </div>
      </div>
    </header>
  );
}
