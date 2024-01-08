import React from "react";
import { projects } from "../constants/projects";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";

export default function GalleryPage() {
  return (
    <>
      <div className="h-dvh w-full bg-blue-300 overflow-scroll">
        <Header />
        <Gallery projects={projects} />
      </div>
    </>
  );
}
