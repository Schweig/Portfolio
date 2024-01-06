"use client";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  style?: CSSProperties | undefined;
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
      className="max-w-80 rounded-lg overflow-hidden drop-shadow-xl bg-stone-100 inset-4 mb-5"
    >
      <Image
        className="mx-auto w-full max-h-fit aspect-auto p-6 select-none"
        src={image}
        alt={imageAlt}
        width={400}
        height={400}
        draggable={false}
      ></Image>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 select-none">{title}</div>
        <p className="text-gray-700 text-base select-none">{description}</p>
        <div className="flex flex-row w-full justify-end align-center mt-5">
          <Link
            className="  h-10 px-6 font-semibold rounded-md border border-slate-400 text-slate-900  select-none"
            href={link}
          >
            <p className="h-full flex justify-center items-center">
              Learn More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
