import React from "react";
import { projects } from "../constants/projects";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";

export default function GalleryPage() {
  return (
    <>
    <Header/>
    <div className="h-full w-full bg-blue-300 overflow-scroll">
      <Gallery projects={projects} />
    </div>
    </>
  );
}
