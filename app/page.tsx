"use client";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Swiper } from "./components/Swiper";
import { Project, projects } from "./constants/projects";
import Script from "next/script";
import React from "react";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [firstTimeVisit, setFirstTimeVisit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [availableProjects, setAvailableProjects] = useState<Array<Project>>(
    []
  );

  // filter the projects at some point
  const collectFeedback = (project: Project, sentiment: string) => {
    if (!window.gtag) {
      return;
    }
    window.gtag("event", "project_feedback", {
      project: project.title,
      sentiment: sentiment,
    });
  };

  useEffect(() => {
    const hasVisted = localStorage.getItem("visted");
    if (!hasVisted) {
      localStorage.setItem("visted", "true");
      setFirstTimeVisit(true);
    } else {
      setFirstTimeVisit(false);
    }
  }, []);

  const setSeen = (project: Project) => {
    // if we have an existing set in storage update it else create a new one
    const projectsString = localStorage.getItem("seenProjects");
    let projects: Set<String>;
    if (projectsString) {
      const projectsArr = JSON.parse(projectsString);
      projects = new Set(projectsArr);
      projects.add(project.title);
    } else {
      projects = new Set([project.title]);
    }
    const projectsArr = Array.from(projects);
    localStorage.setItem("seenProjects", JSON.stringify(projectsArr));
  };
  const getSeen = (): Set<String> => {
    // read the set from local storage and convert it to a set object
    const projectsString = localStorage.getItem("seenProjects");
    let projects: Set<String>;
    if (projectsString) {
      const projectsArr = JSON.parse(projectsString);
      projects = new Set(projectsArr);
    } else {
      projects = new Set();
    }
    return projects;
  };

  useEffect(() => {
    const seenProjects = getSeen();
    const allProjects = [...projects];
    const availableProjects = allProjects.filter((project) => {
      return !seenProjects.has(project.title);
    });
    setAvailableProjects(availableProjects);
    setIsLoading(false);
  }, []);

  const handleSwipedLeft = () => {
    collectFeedback(availableProjects[currentProject], "negative");
    setSeen(availableProjects[currentProject]);
    setCurrentProject(currentProject + 1);
  };
  const handleSwipedRight = () => {
    collectFeedback(projects[currentProject], "positive");
    setSeen(availableProjects[currentProject]);
    setCurrentProject(currentProject + 1);
  };
  if (isLoading) {
    return (
      <main className="flex flex-row justify-center items-center px-4 h-full">
        <div className="w-10 h-10 bg-cyan-600 drop-shadow-lg animate-bounce animation-delay-200 m-5"></div>
        <div className="w-10 h-10 bg-cyan-500 drop-shadow-lg animate-bounce animation-delay-400 m-5"></div>
        <div className="w-10 h-10 bg-cyan-400 drop-shadow-lg animate-bounce animation-delay-600 m-5"></div>
      </main>
    );
  }
  return (
    <>
      {firstTimeVisit && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          hidden={!firstTimeVisit}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Hi!
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setFirstTimeVisit(false);
                  }}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Swipe left or right to give feedback on what you think of my
                  work. I have Google Analytics wired in so I can generate
                  reports based on what people think.
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => {
                    setFirstTimeVisit(false);
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Lets go!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {currentProject < availableProjects.length ? (
        <>
        <Header />
        <main className="bg-blue-300 flex flex-col items-center px-4 h-full">
          <div className="mx-auto px-4 pt-6 md:px-12">
            <Swiper
              onSwipedLeft={handleSwipedLeft}
              onSwipedRight={handleSwipedRight}
            >
              <Card
                key={availableProjects[currentProject].title}
                title={availableProjects[currentProject].title}
                description={availableProjects[currentProject].description}
                image={availableProjects[currentProject].image}
                link={availableProjects[currentProject].link}
                imageAlt={availableProjects[currentProject].title}
              ></Card>
            </Swiper>
          </div>
        </main>
        </>
      ) : (
        <div className="overflow-auto h-full bg-blue-300">
          <Header />
          <Gallery projects={projects} />
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
    </>
  );
}
