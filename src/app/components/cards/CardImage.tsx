'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface ImageCardProps {
  imageUrl: string | StaticImport;
  title: string;
}

export default function ImageCard({ imageUrl, title }: ImageCardProps) {
  return (
<div
  className="flex-1 min-w-[250px] max-w-[390px] lg:max-w-[360px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
  role="group"
  aria-label={`Imagem de ${title} com link para WhatsApp`}
>
  <figure className="relative w-full h-60">
    <Image 
      src={imageUrl} 
      alt={title} 
      fill 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={100}
      className="object-cover"
    />
    <figcaption className="sr-only">{title}</figcaption>
  </figure>

  <div className="px-2 text-center bg-principal">
    <Link
      href="https://wa.me/5519987671072?text=Ol%C3%A1%2C%20Estava%20vendo%20seu%20site%20e%20gostaria%20de%20saber%20mais."
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-textos2 hover:underline"
      aria-label={`Falar sobre ${title} no WhatsApp (abre em nova aba)`}
    >
      {title}
    </Link>
  </div>
</div>

  );
}
