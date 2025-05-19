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
            href="https://wa.me/5519991824412?text=V%C3%AD%20o%20seu%20site%2C%20quero%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt />
            <strong>Fone:</strong> (19) 99182-4412
          </Link>
        </div>

        {/* Unidade 2 */}
        <div className="space-y-1">
          <Link
            href="https://www.google.com/maps/@-22.863054,-47.0388235,3a,75y,147.98h,90t/data=!3m7!1e1!3m5!1sy7BCVsirHxXgvAXLgPi8MQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dy7BCVsirHxXgvAXLgPi8MQ%26yaw%3D147.98!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaMapMarkerAlt />
            Rua Luis Paolieri, 112 - parque São Quirino
          </Link>

          <Link
            href="https://wa.me/5519991824412?text=V%C3%AD%20o%20seu%20site%2C%20quero%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaPhoneAlt />
            <strong>Fone:</strong> (19) 99182-4412
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
