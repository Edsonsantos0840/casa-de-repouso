"use client";

// Módulos.
import Image from "next/image";
import ContactForm from "../form/ContactForm";
import CardContactAdress from "./CardContactAdress";
import CardContactSociais from "./CardContactSociais";
import CardMor from "./CardMor";

interface PropsCardHead {
  image: string;
  texto?: string;
  descrição?: string;
  botao?: boolean;
}

export default function CardContact({
  image,
  texto,
  descrição,
  botao,
}: PropsCardHead) {
  return (
    <section
      className="relative w-full md:h-[50vh] lg:h-[100vh] flex items-center lg:justify-end "
      aria-labelledby="contact-card-title"
    >
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
      <div className="absolute inset-0 bg-gradient-to-l from-[#003347] via-[#003347a6] via-100% to-transparent"></div>

      {/* Conteúdo (textos e botões) alinhado à direita */}
      <div className="md:flex w-full ">
        <div className="relative z-10  text-textoPrincipal drop-shadow-xl text-justify px-2 lg:px-10 w-full lg:max-w-[50%] space-y-3">
          <h2
            id="contact-card-title"
            className="text-3xl md:text-[1.6rem] lg:text-3xl font-bold font-pacifico"
          >
            {texto}
          </h2>
          <p className="hidden lg:block text-base ">{descrição}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex flex-col justify-start  ">
              <CardContactAdress />
              {/* Seção de Redes Sociais */}
              <CardContactSociais sty='text-4xl' />
              <CardMor />
            </div>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
