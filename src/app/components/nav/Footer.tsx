import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative inset-0 bg-gradient-to-l from-[#091b22] via-[#002b3b] to-[#091b22] text-white py-10 px-6">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#091b22] via-[#001720] via-70% "></div> */}

      <div className="relative container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Seção de Endereço */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Endereço</h2>
          <address className="not-italic">
            <Link href={'https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c9ab2632e755:0x4e4dbbe1d4cc4997!8m2!3d-22.9425423!4d-47.0998389!16s%2Fg%2F11gcx_g4cy?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D'} target="_blank" className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt /> Rua Exemplo, 123 - Cidade, Estado
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
              <FaFacebook size={26} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaInstagram size={26} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaTiktok size={26} />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaLinkedin size={26} />
            </Link>
            <Link
              href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
              target="_blank"
              className="hover:text-gray-300"
              aria-label="Instagram"
            >
              <FaWhatsapp size={26} />
            </Link>
          </nav>
        </section>

        {/* Seção de Créditos */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Créditos</h2>
          <p>
            © {new Date().getFullYear()} Shangrilá. Todos os direitos
            reservados.
          </p>
          <p className="text-sm mt-2">
            Desenvolvido por <span className="font-semibold">[Seu Nome]</span>
          </p>
        </section>
      </div>
    </footer>
  );
}
