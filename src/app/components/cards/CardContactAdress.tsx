import Link from "next/link";
import { fieldContact } from "../fields/FieldsContact";

export default function CardContactAdress() {
  return (
    <section aria-labelledby="contact-address-title ">
      <h2 id="contact-address-title" className="text-xl font-semibold mb-3 text-left ">
        Endereços e Contatos
      </h2>
      <address className="not-italic text-base">
        {/* Unidade 1 */}
        <div className="space-y-3">
          {fieldContact.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:underline"
            >
              {item.ico}
              <div >
              {item.text2 && <strong className="pr-1">{item.text2}</strong>}{item.text}
              </div>
              <div >
              {item.text3 && <span className="hidden lg:inline">{item.text3}</span>}
              </div>
            </Link>
          ))}

        </div>
      </address>
    </section>
  );
}
