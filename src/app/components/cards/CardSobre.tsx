"use client";

// Módulos.
import Image from "next/image";
import Link from "next/link";
import {  FaPersonShelter } from "react-icons/fa6";

interface PropsCardHead {
  image: string;
  texto?: string;
  descrição?: string;
  textHidden?: string;
  botao?: boolean;
}

export default function CardSobre({
  image,
  texto,
  descrição,
  textHidden,
  botao,
}: PropsCardHead) {
  return (
    <div className="relative w-full h-[50vh] lg:h-[90vh] flex items-center justify-end overflow-hidden ">
      {/* Imagem de fundo fixa */}
      <Image
        src={image}
        alt="Imagem de fundo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        className="absolute object-cover"
      />

      {/* Degradê da direita para a esquerda */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#003347e0] via-[#0033478c] via-50% to-transparent"></div>

      {/* Conteúdo (textos e botões) alinhado à direita */}
      <div className="flex justify-around items-center">
        <div className="hidden lg:block z-10 text-textoPrincipal space-y-4">
          {/* <Image src="/Shangrilá__1.png" alt="Logo Marca" width={600} height={500}/> */}
          <div className="w-full flex flex-col">
            <div className="flex gap-3">
            <h1 className="text-3xl text-principal2 font-pacifico md:text-2xl lg:text-6xl ">
              Shangrila
            </h1>
            <div >
              <h2
                className="
                 text-3xl text-textoPrincipal font-pacifico md:text-2xl lg:text-6xl 
                 text-[var(--letra3-cor)]  "
              >
                Residencial
              </h2>
              <p className=" text-base lg:text-base text-principal2">
                CUIDANDO DE SUA FAMÌLIA
              </p>
            </div>
            </div>
          </div>

          <FaPersonShelter
            size={180}
            className=" text-textoPrincipal m-auto hover:scale-110"
          />
          <div className=" w-[40%] h-6 bg-white rounded-2xl m-auto"></div>
        </div>
        <div className="relative z-10 text-textoPrincipal text-justify px-2 lg:px-12 w-full lg:max-w-[50%]">
          <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold font-pacifico text-center">
            {texto}
          </h1>
          <p className="text-lg md:text-base  mt-4">{descrição}</p>
          <p className="hidden md:block">{textHidden}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex justify-center lg:justify-start gap-6 mt-6 ">
              <Link
                href="/contato"
                className="px-6 py-3 bg-principal2 rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
              >
                Agende um horário
              </Link>
              <Link
                href="/sobre"
                className="px-6 py-3 bg-principal2 rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
              >
                Saiba mais
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
