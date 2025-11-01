"use client";

import Image from "next/image";
import useSlide from "../../hooks/useSlide";

export default function CardAdress(props: {images: string[]} ) {
 const index = useSlide(props)
  return (
    <div className="relative w-full h-[25rem] mx-auto my-8 lg:my-0 rounded-md">
      {/* Slide de Imagens */}
      {props.images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={`Slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
          quality={100}
          className={`absolute object-cover transition-opacity rounded-md duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
