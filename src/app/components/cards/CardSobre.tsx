"use client";

// Módulos.
import Image from "next/image";
import { FaPersonShelter } from "react-icons/fa6";
import CardMor from "./CardMor";

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
    <section
      className="relative w-full h-[50vh] lg:h-[90vh] flex items-center justify-end overflow-hidden"
      aria-labelledby="section-title"
    >
      {/* Imagem de fundo fixa */}
      <Image
        src={image}
        alt="Imagem de fundo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        className="absolute object-cover"
        aria-hidden="true"
      />

      {/* Degradê visual */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-[#003347e0] via-[#0033478c] via-50% to-transparent"
        aria-hidden="true"
      ></div>

      <div className="flex justify-around items-center w-full">
        {/* Conteúdo visual esquerdo */}
        <div
          className="hidden lg:block z-10 text-textoPrincipal space-y-4"
          aria-hidden="true"
        >
          <div className="w-full flex flex-col">
            <div className="flex gap-3">
              <h2 className="text-3xl text-principal2 font-pacifico md:text-2xl lg:text-6xl">
                Shangrila
              </h2>
              <div>
                <h3
                  className="text-3xl text-textoPrincipal font-pacifico md:text-2xl lg:text-6xl"
                  style={{ color: "var(--letra3-cor)" }}
                >
                  Residencial
                </h3>
                <p className="text-base lg:text-base text-principal2">
                  CUIDANDO DE SUA FAMÍLIA
                </p>
              </div>
            </div>
          </div>
          <FaPersonShelter
            size={180}
            className="text-textoPrincipal m-auto hover:scale-110"
            role="img"
            aria-label="Ícone representando cuidado residencial"
          />
          <div
            className="w-[40%] h-6 bg-white rounded-2xl m-auto"
            aria-hidden="true"
          ></div>
        </div>

        {/* Conteúdo principal textual */}
        <div className="relative z-10 text-textoPrincipal text-justify px-2 lg:px-12 w-full lg:max-w-[50%]">
          <h1
            id="section-title"
            className="text-4xl md:text-3xl lg:text-3xl font-bold font-pacifico text-center"
          >
            {texto}
          </h1>
          <p className="text-lg md:text-base mt-4">{descrição}</p>
          <p className="hidden md:block">{textHidden}</p>

          {!botao && <CardMor sty="mt-4" />}
        </div>
      </div>
    </section>
  );
}
