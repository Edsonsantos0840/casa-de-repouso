import { ReactElement } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

interface FieldsSocialsProps {
  ico: ReactElement<any, any>;
  href: string;
}
export const fieldSocials: FieldsSocialsProps[] = [
  {
    ico: <FaFacebook className="hover:scale-125 transition-transform" />,
    href: "https://www.facebook.com/share/18mkFuqE31/?mibextid=wwXIfr",
  },
  {
    ico: <FaInstagram className="hover:scale-125 transition-transform" />,
    href: "https://www.instagram.com/shangri.laresidencial/?igsh=MXFwNzlkMmRxMmR2cA%3D%3D&utm_source=qr",
  },
  {
    ico: <FaLinkedin className="hover:scale-125 transition-transform" />,
    href: "#",
  },
  {
    ico: <FaTiktok className="hover:scale-125 transition-transform" />,
    href: "https://www.tiktok.com/@shangri.laresidencial?_t=ZM-8vYe5i7mwh3&_r=1",
  },
  {
    ico: <FaWhatsapp className="hover:scale-125 transition-transform" />,
    href: "https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais.",
  },
];
