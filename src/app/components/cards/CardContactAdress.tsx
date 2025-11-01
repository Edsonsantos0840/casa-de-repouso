import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { fieldContact } from "../fields/FieldsContact";

export default function CardContactAdress() {
  return (
    <section aria-labelledby="contact-address-title ">
      <h2 id="contact-address-title" className="text-xl font-semibold mb-3 ">
        Endereços e Contatos
      </h2>
      <address className="not-italic text-base">
        {/* Unidade 1 */}
        <div className="space-y-4">
          {fieldContact.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              {item.ico}
              {item.text2 && <strong>{item.text2}</strong>}{item.text}
            </Link>
          ))}

        </div>
      </address>
    </section>
  );
}
