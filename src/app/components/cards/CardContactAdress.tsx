import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function CardContactAdress() {
  return (
    <section aria-labelledby="contact-address-title">
      <h2
        id="contact-address-title"
        className="text-xl font-semibold mb-3"
      >
        Endereços e Contatos
      </h2>
      <address className="not-italic space-y-2 text-base">
        {/* Unidade 1 */}
        <div className="space-y-1">
          <Link
            href="https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaMapMarkerAlt />
            Rua Mogi Mirim, 1049 - Novo Campos Elíseos
          </Link>

          <Link
            href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt />
            <strong>Fone:</strong> (19) 98767-1072
          </Link>
        </div>

        {/* Unidade 2 */}
        <div className="space-y-1">
          <Link
            href="https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaMapMarkerAlt />
            Rua Exemplo, 123 - Cidade, Estado
          </Link>

          <Link
            href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt />
            <strong>Fone:</strong> (19) 3369-8678
          </Link>
        </div>

        {/* Email */}
        <p className="flex items-center gap-2 mt-3">
          <FaEnvelope />
          <Link
            href="mailto:shangrilaresidencialparaidosos@gmail.com"
            className="hover:underline"
          >
            shangrilaresidencialparaidosos@gmail.com
          </Link>
        </p>
      </address>
    </section>
  );
}
