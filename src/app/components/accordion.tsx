// https://cruip.com/create-an-image-accordion-with-tailwind/
import Image from "next/image";
import React from "react";
const items = [
  {
    id: 1,
    url: "/Sunil Photo.png",
    title: "Sunil Kaushal",
    description: "Co-Founder",
  },

  {
    id: 2,
    url: "/Bindiya Photo.png",
    title: "Bindiya Kaushal",
    description: "Founder",
  },
  {
    id: 3,
    url: "/Dhruvi Photo.png",
    title: "Dhruvi Kaushal",
    description: "Marketing Head",
  },
  {
    id: 4,
    url: "/Ronit photo.png",
    title: "Ronit Kaushal",
    description: "Developer",
  },
];
function Accordion() {
  return (
    <>
      <div className="group flex justify-center flex-wrap md:flex-nowrap gap-2 w-[95%] lg:w-full max-w-[1200px] mx-auto mb-10 mt-10">
        {items.map((item) => {
          return (
            <article
              key={item.id}
              className="group/article relative w-[48%] rounded-xl border-4 border-t-2 border-r-2 border-black overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/100 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/0  after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
            >
              <a
                className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end"
                href="#0"
              >
                <h1 className="inter text-base md:text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item?.title}
                </h1>
                <span className="inter text-lg font-bold md:text-2xl  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {item?.description}
                </span>
              </a>
              <Image
                className="object-cover h-72 md:h-[420px]  w-full"
                src={item?.url}
                width="960"
                height="480"
                alt="Image 01"
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
