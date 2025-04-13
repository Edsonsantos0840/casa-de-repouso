interface FieldsInfoMorProps {
  image?: string;
  title: string;
  paragraph: string;
  textHidden: string;
  btn: string;
  extend?: boolean;
}
export const ImageFront: string [] = ["/image/shangrilafrente1.jpg", "/image/shangrilafrente2.jpg", "/image/shangrilafrente3.jpg", "/image/shangrilafrente4.jpg", "/image/shangrilacasa.jpg", "/image/shangrilafrente5.jpg", "/image/shangrilacasa2.jpg"]

export const fieldInfMor: FieldsInfoMorProps[] = [
  {
    image: "/image/shangrilasaude4.jpg",
    title: "Profissionais Especializados",
    paragraph:
      "Na Shangrilá Residencial para Idosos, a segurança e o bem-estar dos nossos residentes são prioridades absolutas.",
    textHidden:
      "Profissionais especializados como médicos, nutricionistas, terapeutas e psicólogos trabalham juntos para proporcionar um atendimento completo, individualizado e humanizado.",
    btn: "Ler",
    extend: true,
  },
  {
    image: "/image/shangrilaAlimentacao2.jpg",
    title: "Alimentação Balanceada",
    paragraph:
      "Entendemos que uma boa alimentação é essencial para a saúde, o bem-estar e a qualidade de vida na melhor idade.",
    textHidden:
      "Nossos cardápios são elaborados por nutricionistas especializados em geriatria, respeitando as necessidades individuais de cada residente ",
    btn: "Ler",
    extend: true,
  },
  {
    image: "/image/shangrilaAtividades.jpg",
    title: "Atividades físicas",
    paragraph:
      "Na Shangrilá Residencial para Idosos, acreditamos que o envelhecimento pode (e deve!) ser ativo, alegre e estimulante.",
    textHidden:
      "Uma programação de atividades físicas, como alongamento, caminhadas assistidas e exercícios adaptados, promovendo mobilidade, equilíbrio e bem-estar.",
    btn: "Ler",
    extend: true,
  },

];
