'use client'
// Módulos.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// Ícone.
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const sections: string[] = [
    "Início", "Serviços", "Galeria", "Quem Somos", "Mais Sobre", "Endereços", "Contato"
  ];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className="fixed w-full z-20 bg-textos2 shadow-lg">
      <div className="max-w-[1200px] m-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <div className="flex gap-1 w-[30%]">
          <h1 className="text-3xl text-principal font-pacifico md:text-2xl lg:text-3xl">
            Shangrila
          </h1>
          <div>
            <h2 className="text-3xl text-principal2 font-pacifico md:text-2xl lg:text-3xl">
              Residencial
            </h2>
            <p className=" text-[.7rem] md:text-[.6rem] lg:text-xs text-principal">
              CUIDANDO DE SUA FAMÌLIA
            </p>
          </div>
        </div>

        {/* Botão hamburguer visível no mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-principal">
          <RxHamburgerMenu />
        </button>

        {/* Menu de navegação (visível direto no desktop, toggle no mobile) */}
        <nav className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-[#ffffffeb]  lg:bg-transparent transition-all duration-300 ease-in-out
          ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}>
          <ul className="flex flex-col items-center lg:flex-row lg:gap-4 p-4 lg:p-0">
            {sections.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className={`block text-lg p-2 rounded-lg transition ${
                    pathname === `${pathname}#${link}`
                      ? "bg-principal text-textoPrincipal font-bold"
                      : "text-principal hover:scale-105 hover:text-textoPrincipal hover:bg-principal"
                  }`}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default NavBar;
