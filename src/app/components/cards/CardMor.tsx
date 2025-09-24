import Link from "next/link";

export default function CardMor({sty}: {sty?: string}) {
  return (
    <div className={`flex justify-center md:justify-start gap-4 md:gap-8 ${sty}`}>
    <Link
      href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
      target="_blank"
      className="px-8 lg:px-3 py-3 bg-principal2 rounded-lg font-semibold hover:bg-textoPrincipal hover:text-principal transition"
    >
      Entre em Contato.
    </Link>
    <Link
      href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
      target="_blank"
      className="px-14 lg:px-9 py-3 bg-principal2 rounded-lg font-semibold hover:bg-textoPrincipal hover:text-principal transition"
    >
      Saiba mais
    </Link>
    </div>
  )
}
