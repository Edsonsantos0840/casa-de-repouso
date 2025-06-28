import Link from "next/link";
import { fieldSocials } from "../fields/FieldsSocials";

export default function CardContactSociais({ sty }: { sty: string }) {
  return (
    <section
      className="md:mt-10 lg:-my-auto"
      aria-labelledby="redes-sociais-title"
    >
      <h2 id="redes-sociais-title" className="text-xl font-semibold mb-3">
        Redes Sociais
      </h2>
      <nav
        className={`flex gap-4 ${sty}`}
        aria-label="Links para redes sociais"
      >
        {fieldSocials.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="hover:text-gray-300"
            aria-label="Acesse nosso Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.ico}
          </Link>
        ))}

      </nav>
    </section>
  );
}
