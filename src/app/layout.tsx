import { Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Shangrlá Residencial para Idosos",
  description: "Shangrilá residencial é uma casa de repouso para idosos, aqui sua família será bem cuidada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${pacifico.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
