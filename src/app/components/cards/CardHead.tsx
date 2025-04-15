"use client";
//Módulos.
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CardMor from "./CardMor";

interface PropsCardHead {
  images?: string[];
  image?: string;
  texto?: string;
  descrição?: string;
  botao?: boolean;
}

export default function CardHead(props: PropsCardHead) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [props.images.length]);

  return (
    <section
      className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-start overflow-hidden top-[60px] mb-10"
      aria-label="Banner de destaque com imagens rotativas"
    >
      {props.images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={i === index ? `Imagem de destaque número ${i + 1}` : ""}
          aria-hidden={i !== index}
          fill
          quality={100}
          priority={i === index}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`absolute object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div aria-live="polite" className="sr-only">
        {`Slide ${index + 1} de ${props.images.length}`}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-t from-[#003347] to-transparent" />

      <div className="relative z-10 text-textoPrincipal text-center px-2 md:px-6 lg:px-12">
        <h1 className="text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-bold font-pacifico md:-mb-9">
          {props.texto}
        </h1>
        <p className="hidden md:block text-[1.1rem] md:text-[1.3rem] lg:text-[1.3rem] mt-4 md:w-[60%] lg:w-[85%] mx-auto">
          {props.descrição}
        </p>

        {!props.botao && <CardMor sty="mt-4" />}
      </div>
    </section>
  );
}
