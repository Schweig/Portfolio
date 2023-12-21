import { useState } from "react";
import { projects } from "../constants/projects";
import  Card from "./Card";
import DragMove from "./DragMove";
export default function Swiper() {
    const [translate, setTranslate] = useState({
        x: 0,
        y: 0
      });
    
      const handleDragMove = (e:any) => {
        setTranslate({
          x: translate.x + e.movementX,
          y: translate.y + e.movementY
        });
      };
  return (
    <>
      {projects.map((project) => {
        return (
            <DragMove
            key={project.title}
            onDragMove={handleDragMove}
            >
          <Card
            style={{transform:`translateX(${translate.x}px) translateY(${translate.y}px)`}}
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            imageAlt={project.title}
          />
          </DragMove>
        );
      })}
    </>
  );
}
