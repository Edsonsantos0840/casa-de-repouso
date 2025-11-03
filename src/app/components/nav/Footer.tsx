import Link from "next/link";
import CardContactAdress from "../cards/CardContactAdress";
import CardContactSociais from "../cards/CardContactSociais";

export default function Footer() {
  return (
    <footer className="relative inset-0 bg-gradient-to-l from-[#091b22] via-[#002b3b] to-[#091b22] text-white py-2 px-6 lg:p-2 animate-fadeIn">
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[39%_28%_33%] gap-4 lg:gap-2  text-left lg:text-center md:items-center">
        {/* Seção de Endereço */}
        <CardContactAdress />

        {/* Seção de Redes Sociais */}
        <CardContactSociais sty='text-5xl  items-center' />

        {/* Seção de Créditos */}
        <section>
          <h2 className="text-xl font-semibold my-3">Créditos</h2>
          <p>
            © {new Date().getFullYear()} Shangrilá. Todos os direitos
            reservados.
          </p>
          <p className="text-sm mt-2 hover:scale-105 hover:text-yellow-300">
            Desenvolvido por{" "}
            <Link
              href="https://protifolio-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              aria-label="Portfólio de Edson Santos"
              title="Ver portfólio de Edson Santos"
            >
              Edson Santos
            </Link>
          </p>
        </section>
      </div>
    </footer>
  );
}
