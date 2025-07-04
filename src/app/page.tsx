import CardHead from "./components/cards/CardHead";
import Container from "./components/container/Content";
import CardInfo from "./components/cards/CardInfo";
import CardImage from "./components/cards/CardImage";
import CardSobre from "./components/cards/CardSobre";
import CardContact from "./components/cards/CardContact";
import Footer from "./components/nav/Footer";
import { fieldInfo } from "./components/fields/FieldsInfo";
import {
  fieldsImages,
  fieldsImages2,
  images,
} from "./components/fields/FieldsImages";
import { fieldInfMor, ImageFront } from "./components/fields/FieldsInfoMor";
import CardImage2 from "./components/cards/CardImage2";
import CardAdress from "./components/cards/CardAdress";

// ✅ Next.js Metadata API (Next 13+ / 15+)
import type { Metadata } from "next";

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

export default function Home() {
  return (
    <div id="Início" className="w-full flex flex-col px-1 ">
      <CardHead
        image={"./image/shangrilacapa.jpg"}
        images={images}
        texto="Residencial Sangrilá"
        descrição="Cuidando de sua Família."
      />
      <Container>
        {/* Seção Explicativa sobre Mármore, Granito e Ônix */}
        <section id="Serviços" aria-labelledby="servicos-title" className="p-0">
          <h2
            id="servicos-title"
            className="text-textos3 text-3xl md:text-4xl hidden md:flex justify-center my-2 md:my-10"
          >
            Seu Novo Lar Com Carinho{" "}
            <span className="hidden lg:inline" aria-hidden="true">
              , Cuidado e Qualidade de Vida
            </span>
          </h2>

          <div className="md:flex justify-between items-center flex-wrap lg:gap-4 m-auto mt-12">
            {fieldInfo.map((field, i) => (
              <article key={i} className="text-center" aria-label={field.title}>
                <field.ico
                  className="text-principal text-[80px] md:text-[60px] m-auto"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                />
                <CardInfo
                  title={field.title}
                  paragraph={field.paragraph}
                  textHidden={field.textHidden}
                  btn={field.btn}
                  extend={field.extend}
                />
              </article>
            ))}
          </div>
        </section>
      </Container>
      {/* seção de imagens */}
      <section
        id="Galeria"
        aria-labelledby="galeria-title"
        role="region"
        className="bg-fundoProdduto2"
      >
        <Container>
          <h2
            id="galeria-title"
            className="text-principal font-pacifico text-4xl text-center my-10"
          >
            Galeria de Imagens
          </h2>

          <div className="flex flex-wrap justify-around gap-3 pb-6 md:px-0">
            {fieldsImages.map((field, i) => (
              <CardImage
                key={i}
                imageUrl={field.imageUrl}
                title={field.title}
              />
            ))}

            {fieldsImages2.map((field, i) => (
              <CardImage2
                key={i}
                imageUrl={field.imageUrl}
                title={field.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <section
          id="Mais Sobre"
          className="p-0"
          aria-labelledby="titulo-mais-sobre"
        >
          <h2
            id="titulo-mais-sobre"
            className="text-textos3 font-pacifico text-4xl text-center mt-5"
          >
            Nossos Serviços
          </h2>

          <div className="w-full md:flex flex-wrap justify-between items-center lg:gap-4 m-auto">
            {fieldInfMor.map((field, i) => (
              <article
                key={i}
                role="group"
                aria-label={`Serviço: ${field.title}`}
              >
                <CardInfo
                  image={field.image}
                  title={field.title}
                  paragraph={field.paragraph}
                  textHidden={field.textHidden}
                  btn={field.btn}
                  extend={field.extend}
                />
              </article>
            ))}
          </div>
        </section>
      </Container>
      {/* seção sobre */}
      <section id="Quem Somos" aria-labelledby="titulo-quem-somos">
        <CardSobre
          image={images[3]}
          texto="Quem Somos."
          descrição="Há mais 8 anos, a Casa de Repouso Shangri-lá se dedica a oferecer cuidado, conforto e qualidade de vida para idosos. Com duas unidades especialmente planejadas para atender às necessidades dos nossos residentes, proporcionamos um ambiente acolhedor, seguro e repleto de carinho.
        "
          textHidden=" 
         Nossa missão é garantir bem-estar, dignidade e atenção personalizada para cada idoso, sempre respeitando sua individualidade e promovendo um convívio harmonioso. Contamos com uma equipe de profissionais altamente qualificados, incluindo cuidadores, enfermeiros e especialistas em saúde e bem-estar, para assegurar que cada residente receba o melhor atendimento possível.
         Além do atendimento especializado, oferecemos atividades recreativas, fisioterapia, acompanhamento médico e uma estrutura pensada para garantir conforto e segurança em todas as etapas da vida. Nossa experiência e dedicação fazem da Casa de Repouso Shangrilá um verdadeiro lar para aqueles que confiam em nossos cuidados.

          Venha conhecer nossas unidades e descubra um lugar onde cada idoso é tratado com respeito, carinho e dedicação."
        />
      </section>
      <Container>
        {/* Seção Nossos endereços */}
        <section
          id="Endereços"
          className="px-1 lg:p-0 w-full"
          aria-labelledby="enderecos-title"
        >
          <header>
            <h2
              id="enderecos-title"
              className="text-textos3 font-pacifico text-4xl flex justify-center mt-5 text-center"
            >
              <span>Temos Duas Unidades</span>
              <span className="hidden md:inline ml-3">Para Você.</span>
            </h2>
          </header>

          <div className="lg:flex justify-around items-center gap-8 mt-6">
            <div className="text-center lg:text-left">
              <p className="lg:max-w-[800px] text-lg text-principal mb-4 text-justify p-1">
                Na Shangri-lá Residencial para Idosos, oferecemos muito mais do
                que um espaço físico — proporcionamos um lar acolhedor,
                planejado para garantir conforto, segurança e bem-estar a cada
                residente. Nossas duas unidades modernas foram projetadas para
                atender todas as necessidades dos idosos, com ambientes amplos,
                adaptados, acessíveis e equipados com tudo o que é necessário
                para um dia a dia tranquilo e seguro. A equipe multidisciplinar
                está sempre presente, composta por cuidadores experientes,
                profissionais que trabalham juntos para promover a saúde física,
                emocional e social de cada morador. Oferecemos uma rotina ativa 
                com atividades planejadas
                para estimular a autonomia, fortalecer vínculos de amizade e
                manter o corpo e a mente em movimento. Acreditamos que cada fase
                da vida merece ser vivida com dignidade, por isso cuidamos de
                cada detalhe para que os idosos se sintam protegidos,
                respeitados e, acima de tudo, felizes.
              </p>
            </div>

            <CardAdress images={ImageFront} />
          </div>
        </section>
      </Container>
      {/* seção contato */}
      <section id="Contato" aria-labelledby="contatos-title">
        <CardContact
          image={images[2]}
          texto="Agende Uma Visita."
          descrição="A Casa de Repouso Shangri-lá se dedica a oferecer cuidado, conforto e qualidade de vida para idosos. Com duas unidades especialmente planejadas para atender às necessidades dos nossos residentes.
         "
        />
      </section>
      <Footer />
    </div>
  );
}
