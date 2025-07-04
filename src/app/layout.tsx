import { Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import { Metadata } from "next";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Casa de Repouso Shangrilá | Cuidado, Qualidade de Vida e Carinho",
  description:
    "A Casa de Repouso Shangrilá oferece cuidado, conforto e qualidade de vida para idosos. Unidades modernas, equipe especializada e ambiente familiar acolhedor.",
  keywords: [
    "Casa de Repouso",
    "Residencial para Idosos",
    "Idosos",
    "Cuidados Geriátricos",
    "Cuidadores",
    "Enfermagem",
    "Qualidade de Vida",
    "Shangrilá",
    "Lar para Idosos",
    "Envelhecimento Ativo",
  ],
  authors: [
    {
      name: "Edson Santos",
      url: "https://protifolio-eta.vercel.app",
    },
  ],
  creator: "Edsson Sant",
  publisher: "Edsson Santos",
  
  metadataBase: new URL("https://shangrila-casa-de-repouso.vercel.app/"),
  openGraph: {
    title: "Casa de Repouso Shangrilá",
    description:
      "Ambiente acolhedor, seguro e repleto de afeto. Cuidado humanizado para idosos com equipe multidisciplinar 24h.",
    url: "https://shangrila-casa-de-repouso.vercel.app/",
    siteName: "Shangrilá Residencial para Idosos",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
