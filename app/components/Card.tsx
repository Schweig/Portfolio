"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  style?: any;
}
export function Card({
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
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-slate-300 inset-4 mb-5"
    >
      <Image
        className="mx-auto w-full p-6 select-none"
        src={image}
        alt={imageAlt}
        height={1000}  
        width={1000}
        draggable={false}
      ></Image>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 select-none">{title}</div>
        <p className="text-gray-700 text-base select-none">{description}</p>
      </div>
      <Link className="select-none" href={link}>
        Link to project
      </Link>
    </div>
  );
}
