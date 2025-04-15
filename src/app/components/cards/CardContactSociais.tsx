import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export default function CardContactSociais() {
  return (
    <section className="md:mt-10 lg:-mt-4" aria-labelledby="redes-sociais-title">
      <h2 id="redes-sociais-title" className="text-xl font-semibold mb-3">
        Redes Sociais
      </h2>
      <nav
        className="flex justify-start gap-4 text-2xl"
        aria-label="Links para redes sociais"
      >
        <Link
          href="https://www.facebook.com/share/18mkFuqE31/?mibextid=wwXIfr"
          className="hover:text-gray-300"
          aria-label="Acesse nosso Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={36} className="hover:scale-125 transition-transform" />
        </Link>

        <Link
          href="https://www.instagram.com/shangri.laresidencial/?igsh=MXFwNzlkMmRxMmR2cA%3D%3D&utm_source=qr"
          className="hover:text-gray-300"
          aria-label="Acesse nosso Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={36} className="hover:scale-125 transition-transform" />
        </Link>

        <Link
          href="https://www.tiktok.com/@shangri.laresidencial?_t=ZM-8vYe5i7mwh3&_r=1"
          className="hover:text-gray-300"
          aria-label="Acesse nosso TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={36} className="hover:scale-125 transition-transform" />
        </Link>

        <Link
          href="#"
          className="hover:text-gray-300"
          aria-label="Acesse nosso LinkedIn (em breve)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={36} className="hover:scale-125 transition-transform" />
        </Link>

        <Link
          href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
          className="hover:text-gray-300"
          aria-label="Envie uma mensagem no WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={36} className="hover:scale-125 transition-transform" />
        </Link>
      </nav>
    </section>
  );
}
