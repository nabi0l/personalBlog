import "../CSS/output.css";
import proj1 from "../Assets/proj1.png";
import proj2 from "../Assets/proj2.png";
import proj3 from "../Assets/proj3.png";
import proj4 from "../Assets/proj4.png";
import proj5 from "../Assets/proj5.png";

import { useState, useEffect } from "react";
import Swiper from "swiper/bundle"; // Bundle includes everything needed
import "swiper/css/bundle"; // Correct CSS import

const ProjectsSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 2,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });

    return () => swiper.destroy(); // Cleanup
  }, []);

  return (
    <div className="relative w-full max-w-[1000px] mx-auto px-20">
      <div className="swiper-button-prev !text-white absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"></div>
      <div className="swiper-container mt-8 overflow-hidden">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ height: "300px" }}>
            <img
              src={proj1}
              alt="Project 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="swiper-slide" style={{ height: "300px" }}>
            <img
              src={proj2}
              alt="Project 2"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="swiper-slide" style={{ height: "300px" }}>
            <img
              src={proj3}
              alt="Project 3"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="swiper-slide" style={{ height: "300px" }}>
            <img
              src={proj4}
              alt="Project 4"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="swiper-slide" style={{ height: "300px" }}>
            <img
              src={proj5}
              alt="Project 5"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="swiper-pagination mt-4"></div>
      </div>
      <div className="swiper-button-next !text-white absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"></div>
    </div>
  );
};

const Categories = () => {
  const [categories] = useState([
    { name: "My Personal Journey", id: 1 },
    { name: "Learning Resources", id: 2 },
    { name: "My Projects", id: 3 },
  ]);

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Extract the section ID from the hash
      const sectionId = hash.replace("#section-", "");
      // Find the section element
      const section = document.getElementById(`section-${sectionId}`);
      if (section) {
        // Scroll to the section
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#E9EFEC] py-14 px-6 pt-52">
      {categories.map((category) => (
        <div
          key={category.id}
          id={`section-${category.id}`}
          className="category mb-10 scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 p-3 ">{category.name}</h2>

          <div className="personal text-left text-lg">
            {category.id === 1 && (
              <>
                <p className="mb-4 ">
                  This is a personal note about my journey as a software
                  engineering student and lifestyle blogger. Growing up, I
                  always had a fascination with technology. I would spend hours
                  tinkering with computers, trying to understand how they
                  worked. This curiosity eventually led me to pursue a degree in
                  software engineering.
                </p>
                <p className="mb-4">
                  The path hasn't been easy. There have been moments of
                  self-doubt and challenges that made me question my abilities.
                  From struggling with complex coding concepts to balancing my
                  studies with personal life, I've faced my fair share of
                  obstacles. But each challenge has taught me valuable lessons
                  about resilience and perseverance.
                </p>
                <p className="mb-4">
                  One of the most rewarding experiences has been collaborating
                  with peers on projects. Working together to solve problems and
                  build applications has not only enhanced my technical skills
                  but also helped me develop strong friendships. I've learned
                  the importance of teamwork and communication in the tech
                  industry.
                </p>
                <p className="mb-4">
                  Beyond academics, I've also discovered the importance of
                  self-care and maintaining a balanced lifestyle. As a
                  faith-driven individual, I find strength and motivation in my
                  beliefs, which guide me through tough times. Whether it's
                  taking time to meditate, go for a walk, or spend time with
                  loved ones, I've realized that taking care of my mental health
                  is crucial for my success.
                </p>
                <p className="mb-4">
                  As I continue this journey, I'm excited to share my
                  experiences, insights, and the lessons I learn along the way.
                  This blog is a space for reflection, growth, and connection. I
                  hope to inspire others who may be on a similar path and foster
                  a community of support and encouragement.
                </p>
                <p className="font-semibold mt-5 text-center text-xl">
                  "Every step I take is a part of my story, and I'm grateful for
                  the journey."
                </p>
              </>
            )}
          </div>

          <div className="learning text-left text-lg">
            {category.id === 2 && (
              <>
                <p className="mb-4">
                  This is a collection of learning resources related to my
                  personal journey in software engineering. As I navigate
                  through my studies, I've discovered numerous tools and
                  resources that have significantly enhanced my understanding of
                  various concepts.
                </p>
                <p className="mb-4">
                  One of the first resources I turned to was online learning
                  platforms like <strong>Coursera</strong> and{" "}
                  <strong>edX</strong>. These platforms offer a wide range of
                  courses from top universities and industry leaders. I found
                  courses on programming languages such as Python and Java, as
                  well as specialized topics like web development and data
                  science.
                </p>
                <p className="mb-4">
                  Additionally, I'm a huge fan of <strong>YouTube</strong>{" "}
                  tutorials. Channels like <strong>Traversy Media</strong> and{" "}
                  <strong>Academind </strong>
                  provide fantastic explanations and practical coding examples
                  that have helped me grasp complex topics. I often refer back
                  to these videos when I need a refresher or a different
                  perspective on a subject.
                </p>
                <p className="mb-4">
                  I also believe in the power of community learning.
                  Participating in coding boot camps and local meetups has
                  allowed me to connect with fellow learners and professionals
                  in the field. These interactions have not only provided me
                  with valuable insights but have also motivated me to push my
                  boundaries and challenge myself.
                </p>
                <p className="mb-4">
                  To keep my skills sharp, I've started working on personal
                  projects and contributing to open-source initiatives on
                  platforms like <strong>GitHub</strong>. This hands-on
                  experience has been invaluable in applying what I've learned
                  and understanding real-world applications of coding concepts.
                </p>
                <p className="mb-4">
                  As I continue to grow, I'm excited to share more resources
                  that I discover along the way. Whether it's a new book, a
                  helpful website, or a coding challenge, I believe that sharing
                  knowledge is essential for our collective growth.
                </p>
                <p className="font-semibold mt-5 text-xl text-center">
                  "Learning is a lifelong journey, and I'm grateful for every
                  resource and experience that shapes my path."
                </p>
              </>
            )}
          </div>

          {category.id === 3 && (
            <div className="projects-section mt-12">
              <p className="mb-4 text-lg">
                This is a list of projects I've worked on during my personal
                journey.
              </p>
              <ProjectsSlider />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
