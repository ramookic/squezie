"use client";

import clsx from "clsx";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "How do I use the image compressor?",
    description:
      "Simply upload your images by clicking the 'Browse files' button, adjust the compression settings as needed, and download the compressed images individually or as a zip file.",
  },
  {
    id: 2,
    title: "Is there a limit to the number of images I can compress?",
    description:
      "No, you can upload an unlimited number of images. Our tool is designed to handle large batches of images efficiently without affecting performance.",
  },
  {
    id: 3,
    title: "Can I adjust the compression settings?",
    description:
      "Yes, you can select the compression ratio, set maximum width and height and add suffixes to the filenames of your compressed images.",
  },
  {
    id: 4,
    title: "Do I need to install any software to use the service?",
    description:
      "No, our service is entirely web-based. You can use it directly from your browser without any additional installations.",
  },
  {
    id: 5,
    title: "Is my data secure?",
    description:
      "Yes, your images are processed locally in your browser and are not uploaded to any server. This ensures that your data remains secure and private.",
  },
  {
    id: 6,
    title: "What types of images are supported?",
    description:
      "Our image compressor supports common formats such as JPEG, PNG, and GIF.",
  },
  {
    id: 7,
    title: "Can I use the service on mobile devices?",
    description:
      "Yes, our image compressor is fully responsive and can be used on both desktop and mobile devices.",
  },
];

export default function Faq() {
  const [isOpenId, setIsOpenId] = useState(null);

  function handleClick(id) {
    setIsOpenId(isOpenId === id ? null : id);
  }

  return (
    <section
      id="faq"
      className="container mx-auto flex flex-col md:flex-row justify-between gap-10"
    >
      <div className="text-left flex justify-start flex-col gap-2">
        <span className="text-brand-500 font-bold">FAQ</span>
        <h2 className="text-4xl font-black text-grey-900">
          Frequently Asked Questions
        </h2>
        <p className="text-grey-500 max-w-[400px]">
          Here are some of the most frequently asked questions about our image
          compression service.
        </p>
      </div>
      <ul className="flex flex-col items-start gap-4 w-full max-w-[700px]">
        {data.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            isOpen={isOpenId}
            onClick={handleClick}
          />
        ))}
      </ul>
    </section>
  );
}

function FaqItem({ item, onClick, isOpen }) {
  return (
    <li
      key={item.id}
      onClick={() => onClick(item.id)}
      className="cursor-pointer flex flex-col items-start gap-4 text-left border-b border-grey-200 max-w-[700px] pb-6 pt-2 w-full px-2 md:px-4"
    >
      <div className="flex items-center justify-between w-full gap-4">
        <h4 className="text-xl font-bold text-grey-900 select-none">
          {item.title}
        </h4>
        <div className="flex items-center justify-center bg-grey-900 rounded-full text-grey-0 p-1 select-none">
          <BiPlus
            size={18}
            className={clsx(
              "transition-all ease-in-out duration-150",
              isOpen && "rotate-45"
            )}
          />
        </div>
      </div>
      <p
        className={clsx(
          "text-grey-500 transition-all ease-in-out duration-300",
          isOpen === item.id ? "block" : "hidden"
        )}
      >
        {item.description}
      </p>
    </li>
  );
}
