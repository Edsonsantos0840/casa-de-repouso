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
      className="relative w-full md:h-[50vh] lg:h-[90vh] flex items-center lg:justify-end overflow-hidden"
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
      <div className="md:flex w-full pb-4">
        <div className="relative z-10 mb-6 text-textoPrincipal drop-shadow-xl text-justify px-6 lg:px-12 w-full lg:max-w-[50%] mt-3">
          <h2
            id="contact-card-title"
            className="text-3xl md:text-[1.6rem] lg:text-3xl font-bold font-pacifico"
          >
            {texto}
          </h2>
          <p className="hidden lg:block text-base mt-4">{descrição}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex flex-col justify-start gap-6 mt-6 lg:mt-3">
              <CardContactAdress />
              {/* Seção de Redes Sociais */}
              <CardContactSociais />
              <CardMor />
            </div>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
