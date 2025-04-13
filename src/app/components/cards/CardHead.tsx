"use client";
//Módulos.
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <div className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-start overflow-hidden top-[60px] mb-10">
      {/* Slide de Imagens */}
      {props.images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={`Slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          priority={i === index} // Prioriza a imagem atual
          className={`absolute object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Sombra que cobre apenas a parte inferior da imagem */}
      <div className="absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-t from-[#003347] to-transparent"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-textoPrincipal text-center px-2 md:px-6 lg:px-12">
        <h1 className="text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-bold font-pacifico  md:-mb-9">
          {props.texto}
        </h1>
        <p className=" hidden md:block text-[1.1rem] md:text-[1.3rem] lg:text-[1.3rem] mt-4 md:w-[60%] lg:w-[85%] mx-auto ">
          {props.descrição}
        </p>
        {/* Botões */}
        {!props.botao && (
          <div className="flex justify-center gap-6 mt-6">
            <Link
              href="/contato"
              className="px-6 py-3 bg-principal2  rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
            >
              Agende um horário
            </Link>
            <Link
              href="/sobre"
              className="px-6 py-3 bg-principal2  rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
            >
              Saiba mais
            </Link>
          </div>
        )}
     
    </div>
      </div>
  );
}
