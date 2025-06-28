import { ReactElement } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

interface FieldsContactProps {
  ico: ReactElement<any, any>;
  href: string;
  text: string
  text2?: string
}
export const fieldContact: FieldsContactProps[] = [
  {
    ico: <FaMapMarkerAlt className="hover:scale-125 transition-transform text-2xl" />,
    href: "https://www.google.com/maps/place/R.+Mogi+Mirim,+1049+-+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13050-543/@-22.9425423,-47.0998389,17z",
    text: 'Rua Mogi Mirim, 1049 - Novo Campos Elíseos'
  },
  {
    ico: <FaPhoneAlt className="hover:scale-125 transition-transform text-2xl" />,
    href: "https://wa.me/5519991824412?text=V%C3%AD%20o%20seu%20site%2C%20quero%20saber%20mais.",
    text2: 'Fone:',
    text: '(19) 99182-4412'
  },
  {
    ico: <FaMapMarkerAlt  className="hover:scale-125 transition-transform text-2xl" />,
    href: "https://www.google.com/maps/@-22.863054,-47.0388235,3a,75y,147.98h,90t/data=!3m7!1e1!3m5!1sy7BCVsirHxXgvAXLgPi8MQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3Dy7BCVsirHxXgvAXLgPi8MQ%26yaw%3D147.98!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
    text: 'Rua Luis Paolieri, 112 - parque São Quirino'
  },
  {
    ico: <FaPhoneAlt className="hover:scale-125 transition-transform text-2xl" />,
    href: "https://wa.me/5519991824412?text=V%C3%AD%20o%20seu%20site%2C%20quero%20saber%20mais.",
    text2: 'Fone:',
    text: '(19) 99182-4412'
  },
  {
    ico: <FaEnvelope className="hover:scale-125 transition-transform text-2xl" />,
    href: "mailto:shangrilaresidencialparaidosos@gmail.com",
    text: 'shangrilaresidencialparaidosos@gmail.com'
  },
];
