"use client";
//componentes
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface PropsCardInfo {
  title?: string;
  paragraph?: string;
  textHidden?: string;
  image?: string | StaticImport;
  btn?: string;
  extend?: boolean;
}
export default function CardInfo({
  title,
  paragraph,
  textHidden,
  image,
  btn,
  extend,
}: PropsCardInfo) {
  const [showText, setShowTest] = useState(false);

  return (
    <article
    className={`my-5 mx-2 rounded-lg lg:min-w-80 ${
      extend
        ? "md:w-[360px] lg:w-[370px] text-lg"
        : "md:w-[360px] lg:w-[370px] bg-fundo"
    }`}
  >
    <h3 className="text-3xl text-center text-principal p-1 py-4">{title}</h3>
  
    {image && (
      <figure className="relative w-full h-[250px] rounded-lg">
        <Image
          src={image}
          alt={title ? `Imagem relacionada a ${title}` : "Imagem ilustrativa"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          className="rounded-lg"
        />
        <figcaption className="sr-only">
          {title
            ? `Imagem ilustrativa relacionada a ${title}`
            : "Imagem ilustrativa"}
        </figcaption>
      </figure>
    )}
  
    <p className="text-justify text-textos px-4 py-3 font-sansModifi">
      {paragraph}
    </p>
  
    {showText && (
      <p
        id={`extra-text-${title?.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-justify text-textos px-4 font-sansModifi"
      >
        {textHidden}
      </p>
    )}
  
    <div className="flex justify-center my-5">
      <button
        className="w-[80%] bg-principal text-textos2 rounded-xl shadow-lg hover:bg-principal3 hover:scale-105 ml-4 px-6 py-1 font-semibold my-5"
        onClick={() => setShowTest((prev) => !prev)}
        aria-expanded={showText}
        aria-controls={`extra-text-${title?.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {`${btn} ${showText ? "menos" : "mais"}`}
      </button>
    </div>
  </article>
  );
}
