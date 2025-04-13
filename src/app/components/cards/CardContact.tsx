"use client";

// Módulos.
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../form/ContactForm";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

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
      <div className="absolute inset-0 bg-gradient-to-l from-[#003347] via-[#003347a6] via-70% to-transparent"></div>

      {/* Conteúdo (textos e botões) alinhado à direita */}
      <div className="flex">
        <ContactForm />
        <div className="relative z-10 text-textoPrincipal drop-shadow-xl text-justify px-6 lg:px-12 w-full max-w-[50%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-pacifico">
            {texto}
          </h1>
          <p className="text-base  mt-4">{descrição}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex flex-col justify-start gap-6 mt-6">
              <div className="flex justify-center gap-8">
              <Link
                href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
                target="_blank"
                className="px-6 py-3 bg-principal2 rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
              >
                Entre em Contato.
              </Link>
              <Link
                href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
                target="_blank"
                className="px-6 py-3 bg-principal2 rounded-full font-semibold hover:bg-textoPrincipal hover:text-principal transition"
              >
                Saiba mais
              </Link>
              </div>
              <section>
                <h2 className="text-xl font-semibold mb-3">Endereços</h2>
                <address className="not-italic">
                  <Link href={'https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c9ab2632e755:0x4e4dbbe1d4cc4997!8m2!3d-22.9425423!4d-47.0998389!16s%2Fg%2F11gcx_g4cy?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D'} target="_blank" className="flex items-center justify-center md:justify-start gap-2">
                    <FaMapMarkerAlt /><strong>Unidade 1</strong> Rua Mogi Mirim , 1049 , Novo Campos Eliseos, Campinas
                  </Link>
                  <Link href={'https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais.'} target="_blank" className="flex items-center justify-center md:justify-start gap-2">
                  <FaPhoneAlt /><strong>Fone</strong> (19) 98767-1072
                  </Link>
                  <Link href={'https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c9ab2632e755:0x4e4dbbe1d4cc4997!8m2!3d-22.9425423!4d-47.0998389!16s%2Fg%2F11gcx_g4cy?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D'} target="_blank" className="flex items-center justify-center md:justify-start gap-2">
                    <FaMapMarkerAlt /><strong>Unidade 2</strong> Rua Exemplo, 123 - Cidade, Estado
                  </Link>
                  <Link href={'https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais.'} target="_blank" className="flex items-center justify-center md:justify-start gap-2">
                  <FaPhoneAlt /><strong>Fone</strong> (19) 3369-8678
                  </Link>
                  <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
                    <FaEnvelope />{" "}
                    <a
                      href="mailto:contato@shangrila.com"
                      className="hover:underline"
                    >
                      contato@shangrila.com
                    </a>
                  </p>
                </address>
              </section>

              {/* Seção de Redes Sociais */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Redes Sociais</h2>
                <nav
                  className="flex justify-center md:justify-start gap-4 text-2xl"
                  aria-label="Redes sociais"
                >
                  <Link
                    href="#"
                    className="hover:text-gray-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={36}  className="hover:scale-125"/>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram  size={36}  className="hover:scale-125"/>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300"
                    aria-label="Instagram"
                  >
                    <FaTiktok size={36}  className="hover:scale-125"/>
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-300"
                    aria-label="Instagram"
                  >
                    <FaLinkedin size={36}  className="hover:scale-125"/>
                  </Link>
                  <Link
                    href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
                    className="hover:text-gray-300"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaWhatsapp size={36}  className="hover:scale-125"/>
                  </Link>
                </nav>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
