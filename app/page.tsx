"use client";
import { useState } from "react";
import { Card } from "./components/Card";
import { Swiper } from "./components/Swiper";
import { projects } from "./constants/projects";
import Script from "next/script";
import React from "react";
export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleSwipedLeft = () => {
    setCurrentProject(currentProject + 1);
  };
  const handleSwipedRight = () => {
    setCurrentProject(currentProject + 1);
  };
  return (
    <main className="flex flex-col justify-center items-center p-10 h-full overflow-hidden overflow-y-hidden">
      {currentProject < projects.length ? (
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
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
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
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.GA_MEASUREMENT_ID}');
        `}
      </Script>
    </main>
  );
}
