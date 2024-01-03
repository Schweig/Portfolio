"use client";
import { useState } from "react";
import { Card } from "./components/Card";
import { Swiper } from "./components/Swiper";
import { Project, projects } from "./constants/projects";
import Script from "next/script";
import React from "react";
export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const collectFeedback = (project: Project, sentiment: string) => {
    if (!window.gtag){
      return
    }
    window.gtag("event", "project_feedback", {
      project: project.title,
      sentiment: sentiment
    });
  }
  const handleSwipedLeft = () => {
    collectFeedback(projects[currentProject], "negative")
    setCurrentProject(currentProject + 1);
  };
  const handleSwipedRight = () => {
    collectFeedback(projects[currentProject], "positive")
    setCurrentProject(currentProject + 1);
  };
  return (
    <main className="flex flex-col justify-center items-center px-4 h-full">
      
      {currentProject < projects.length ? (
        <div className="mx-auto px-4 md:px-12">
        <Swiper
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
        >
          <Card
            key={projects[currentProject].title}
            title={projects[currentProject].title}
            description={projects[currentProject].description}
            image={projects[currentProject].image}
            link={projects[currentProject].link}
            imageAlt={projects[currentProject].title}
          ></Card>
        </Swiper>
       </div> 
      ) : (
        <div className="container mx-auto px-4 md:px-12 overflow-auto">
          <div className="flex flex-wrap justify-between content-between md:flex-row sm:flex-col items-end">
            {projects.map((project) => {
              return (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  imageAlt={project.title}
                ></Card>
              );
            })}
          </div>
        </div>
      )}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </main>
  );
}
