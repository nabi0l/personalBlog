import "../CSS/output.css";
import proj1 from "../Assets/proj1.png";
import proj2 from "../Assets/proj2.png";
import proj3 from "../Assets/proj3.png";
import proj4 from "../Assets/proj4.png";
import proj5 from "../Assets/proj5.png";
import {
  BookOpenIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import { useState, useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const ProjectsSlider = () => {
  const projects = [
    {
      id: 1,
      name: "Quiz App",
      description:
        "A quiz app that allows users to take quizzes and see their results",
      image: proj1,
    },
    {
      id: 2,
      name: "Clone of University of Gondar Website",
      description:
        "A clone of the University of Gondar website using HTML, CSS and Js.",
      image: proj2,
    },
    {
      id: 3,
      name: "Clone of Apple website",
      description: "A clone of the apple website using HTML,CSS and Bootstrap",
      image: proj3,
    },
    {
      id: 4,
      name: "E-learning Platform",
      description: "An e-Learning platform using HTML, CSS and Js.",
      image: proj4,
    },
    {
      id: 5,
      name: "Movie Website",
      description: "A movie website using HTML , CSS, JS and PHP.",
      image: proj5,
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="swiper-button-prev !text-white absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-red-800/50 rounded-full p-4 hover:bg-red-800/70 transition-colors"></div>
      <div className="swiper-container mt-8 overflow-hidden px-8">
        <div className="swiper-wrapper">
          {projects.map((project) => (
            <div key={project.id} className="swiper-slide px-4">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-[400px] mb-8">
                <div className="w-full h-64 sm:h-80">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="p-4 mt-4">
                  <h3 className="text-lg font-semibold text-[#212529] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#495057] text-sm">
                    {project.description}
                  </p>
                  {/* <div className="mt-4 flex justify-end">
                    <a
                      href={`#project-${project.id}`}
                      className="text-red-800 hover:text-red-900 font-medium text-sm flex items-center gap-1"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination mt-4"></div>
      </div>
      <div className="swiper-button-next !text-white absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-red-800/50 rounded-full p-4 hover:bg-red-800/70 transition-colors"></div>
    </div>
  );
};

const Categories = () => {
  const [categories] = useState([
    {
      name: "My Personal Journey",
      id: 1,
      icon: RocketLaunchIcon,
      color: "bg-red-100",
    },
    {
      name: "Learning Resources",
      id: 2,
      icon: BookOpenIcon,
      color: "bg-blue-100",
    },
    {
      name: "My Projects",
      id: 3,
      icon: AcademicCapIcon,
      color: "bg-green-100",
    },
  ]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#section-", "");
      const section = document.getElementById(`section-${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#212529]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Explore My Journey
          </h1>
          <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto">
            Discover my experiences, resources, and projects in software
            engineering
          </p>
        </div>
      </div>

      {/* Categories Content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category) => (
          <div
            key={category.id}
            id={`section-${category.id}`}
            className="category mb-16 scroll-mt-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`${category.color} p-3 rounded-lg`}>
                <category.icon className="w-8 h-8 text-red-800" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#212529]">
                {category.name}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:shadow-xl transition-shadow duration-300">
              {category.id === 1 && (
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-justify text-[#495057]">
                      As a software engineering student, my journey into the
                      world of technology has been both challenging and
                      rewarding. Here, I share my personal experiences, the ups
                      and downs, and the valuable lessons I've learned along the
                      way.
                    </p>
                    <p className="text-lg text-justify text-[#495057]">
                      From my first "Hello, World!" to building full-stack
                      applications, every step has contributed to my growth as a
                      developer. I believe in the power of sharing experiences
                      to help others navigate their own tech journeys.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6 text-[#212529]">
                      Key Milestones in My Journey
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Starting My Coding Journey",
                        "First Programming Language",
                        "First Project Success",
                        "Overcoming Imposter Syndrome",
                      ].map((milestone, index) => (
                        <a
                          key={index}
                          href="#section-1"
                          className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300"
                        >
                          <span className="text-red-800 font-medium">
                            {milestone}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {category.id === 2 && (
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-justify text-[#495057]">
                      Learning to code is an ongoing journey, and having the
                      right resources can make all the difference. In this
                      section, I share the tools, tutorials, and learning
                      materials that have helped me along the way.
                    </p>
                    <p className="text-lg text-justify text-[#495057]">
                      Whether you're just starting out or looking to expand your
                      skills, these resources can provide valuable guidance and
                      knowledge to support your learning journey.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6 text-[#212529]">
                      Recommended Learning Resources
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Online Courses and Tutorials",
                        "Books for Developers",
                        "YouTube Channels and Podcasts",
                        "Coding Challenges and Practice Sites",
                      ].map((resource, index) => (
                        <a
                          key={index}
                          href="#section-2"
                          className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                        >
                          <span className="text-blue-800 font-medium">
                            {resource}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {category.id === 3 && (
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-justify text-[#495057]">
                      Projects are where theory meets practice. In this section,
                      I showcase the projects I've worked on, the challenges
                      I've faced, and the solutions I've implemented.
                    </p>
                    <p className="text-lg text-justify text-[#495057]">
                      From simple applications to more complex systems, each
                      project represents a step in my learning journey and an
                      opportunity to apply my skills in real-world scenarios.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6 text-[#212529]">
                      Featured Projects
                    </h3>
                    <ProjectsSlider />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
