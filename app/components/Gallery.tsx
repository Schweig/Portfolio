import React from "react";
import { Card } from "./Card";
import { Project } from "../constants/projects";
interface GalleryProps {
  projects: Array<Project>;
}
export const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
  return (
    <div className="container mx-auto px-4 md:px-12 overflow-auto">
      <div className="flex flex-wrap md:flex-row sm:flex-col items-end justify-center">
        {props.projects.map((project) => {
          return (
            <div key={project.title} className="p-6">
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                imageAlt={project.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
