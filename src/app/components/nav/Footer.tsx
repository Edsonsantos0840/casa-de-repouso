import Link from "next/link";
import CardContactAdress from "../cards/CardContactAdress";
import CardContactSociais from "../cards/CardContactSociais";

export default function Footer() {
  return (
    <footer className="relative inset-0 bg-gradient-to-l from-[#091b22] via-[#002b3b] to-[#091b22] text-white py-14 px-6 animate-fadeIn">
      <div className="relative container mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8 text-left lg:text-center">
        {/* Seção de Endereço */}
        <CardContactAdress />

        {/* Seção de Redes Sociais */}
        <CardContactSociais />

        {/* Seção de Créditos */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Créditos</h2>
          <p>
            © {new Date().getFullYear()} Shangrilá. Todos os direitos
            reservados.
          </p>
          <p className="text-sm mt-2 hover:scale-105 hover:text-yellow-300">
            Desenvolvido por{" "}
            <Link
              href="https://portifolio-beta-gules.vercel.app/"
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
