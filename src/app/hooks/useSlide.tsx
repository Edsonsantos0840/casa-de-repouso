'use client'
import { useState, useEffect } from "react";

interface PropsCardHead {
  images?: string[];
  image?: string;
  texto?: string;
  descrição?: string;
  botao?: boolean;
}

export default function useSlide(props: PropsCardHead) {
  const [index, setIndex] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setIndex((prevIndex) => (prevIndex + 1) % props.images.length);
     }, 5000); // Troca a cada 5 segundos
 
     return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
   }, [props.images.length]);

   return index
}
