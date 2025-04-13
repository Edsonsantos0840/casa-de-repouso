import { IconType } from "react-icons";
import { GiHealthNormal, GiHealthPotion } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbRibbonHealth, TbHealthRecognition } from "react-icons/tb";

interface FieldsInfoProps {
  ico?: IconType;
  title: string;
  paragraph: string;
  textHidden: string;
  btn: string;
  extend?: boolean;
}
export const fieldInfo: FieldsInfoProps[] = [
  {
    ico: GiHealthNormal,
    title: "O Que Oferecemos?",
    paragraph:
      "Na Shangrilá Residencial para Idosos, oferecemos um ambiente acolhedor, seguro e repleto de afeto para nossos residentes.",
    textHidden:
      "Com duas unidades modernas e equipadas, garantimos o cuidado que cada idoso merece, com atenção individualizada e estrutura completa.",
    btn: "Ler",
    extend: true,
  },
  {
    ico: MdHealthAndSafety,
    title: "Por Que A Shangrilá",
    paragraph:
      "Contamos com um Ambiente familiar e humanizado, cuidados 24h com profissionais especializados, atividades físicas, recreativas e cognitivas.",
    textHidden:
      "Alimentação balanceada e supervisionada por nutricionistas, atividades físicas, recreativas e cognitivas, acomodações confortáveis e adaptadas.",
    btn: "Ler",
    extend: true,
  },
  {
    ico: GiHealthPotion,
    title: "Equipe Multidisciplinar",
    paragraph:
      "Contamos com: Enfermeiros e cuidadores 24h, Médicos geriatras, Nutricionistas, Terapeutas ocupacionais, Instrutores de atividades.",
    textHidden:
      "Todas as atividades e cuidados necessários para o bem estar.",
    btn: "Ler",
    extend: true,
  },
  {
    ico: RiMentalHealthFill,
    title: "Viver Com Dignidade.",
    paragraph:
      "Na Shangrilá, cada detalhe foi pensado para proporcionar qualidade de vida, tranquilidade e bem-estar.",
    textHidden:
      "Aqui, os idosos não apenas vivem – vivem bem, com alegria e cuidado.",
    btn: "Ler",
    extend: true,
  },
  {
    ico: TbHealthRecognition,
    title: "De Portas Abertas.",
    paragraph:
      "Venha nos visitar e conhecer de perto esse lar repleto de amor, Shangrilá Residencial para Idosos –",
    textHidden:
      "onde cada fase da vida merece ser vivida com carinho!",
    btn: "Ler",
    extend: true,
  },
  {
    ico: TbRibbonHealth,
    title: "Envelhecimento Ativo.",
    paragraph:
      "Estímulo à autonomia e autoestima dos residentes, Rotina personalizada conforme as necessidades de cada idoso",
    textHidden:
      "Convivência social que promove laços de amizade e afeto, Programas de bem-estar físico e emocional.",
    btn: "Ler",
    extend: true,
  },
];


