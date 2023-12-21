'use client';
import Image from "next/image";
import Link from "next/link";
import { useDrag } from "react-dnd";
interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  style: any
}
export default function Card({
  title,
  description,
  link,
  image,
  imageAlt,
  style,
}: CardProps) {


  return (
    <div
        style={style}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-300 inset-4"
    >
      <Image
        className="mx-auto w-full p-6"
        src={image}
        alt={imageAlt}
        width={450}
        height={450}
      ></Image>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <Link href={link}>Link to project</Link>
    </div>
  );
}
