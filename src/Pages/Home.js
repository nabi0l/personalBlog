import "../CSS/output.css";
import Image from "../Images/profile.jpeg";
import JourneyImage from "../Images/journey.jpg";
import LearningImage from "../Images/learning.jpg";
import ProjectImage from "../Images/project.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Home = () => {
  const [cards, setCards] = useState([
    {
      title: "My First Coding Project",
      excerpt:
        "A simple calculator app that sparked my passion for creating useful tools through code.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/blog/first-coding-project",
    },
    {
      title: "Learning React",
      excerpt:
        "My journey into React development and how it changed my perspective on building user interfaces.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/blog/learning-react",
    },

    {
      title: "Building My Portfolio",
      excerpt:
        "The process of creating this blog and portfolio to showcase my skills and share my journey.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      link: "/blog/building-portfolio",
    },
    {
      title: "My Open Source Contribution",
      excerpt:
        "How I made my first contribution to an open source project and what I learned from the experience.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/blog/open-source-contribution",
    },
    {
      title: "My Tech Stack Journey",
      excerpt:
        "Exploring different technologies and frameworks to find the perfect stack for my projects.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/blog/tech-stack-journey",
    },
  ]);

  const [categories, setCategories] = useState([
    { name: "Personal Journey", link: "#", image: JourneyImage },
    { name: "Learning Resources", link: "#", image: LearningImage },
    { name: "Project", link: "#", image: ProjectImage },
  ]);

  const [featuredPost, setFeaturedPost] = useState([
    {
      title: "My First React Project",
      description:
        "A deep dive into building my first React application, the challenges I faced, and the valuable lessons learned along the way.",
      date: "March 15, 2024",
      category: "Projects",
      link: "/categories#section-3",
    },
    {
      title: "Learning JavaScript: A Beginner's Guide",
      description:
        "My comprehensive guide to getting started with JavaScript, including essential concepts and practical tips for beginners.",
      date: "March 10, 2024",
      category: "Learning Resources",
      link: "/categories#section-2",
    },
    {
      title: "My Journey into Software Engineering",
      description:
        "Reflecting on my personal journey into software engineering, the motivation behind my career choice, and my aspirations for the future.",
      date: "March 5, 2024",
      category: "Personal Journey",
      link: "/categories#section-1",
    },
  ]);

  return (
    <div className="pt-16">
      <div className="hero min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white">
        <section className="bg-gradient-to-b from-[#F8F9FA] to-white text-[#212529] py-10 md:py-20 px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#212529]">
            Hi, I'm Abigail 👋
          </h1>
          <p className="mb-4 md:mb-6 text-xl md:text-2xl text-[#495057]">
            A software engineering student & lifestyle blogger in the making.
          </p>
          <div className="text-lg md:text-xl text-[#495057] max-w-6xl mx-auto">
            <p>
              Welcome to my space on the internet! I'm Abigail Getachew — a
              software engineering student, faith-driven dreamer, and someone
              learning to balance code, creativity, and life. This blog is where
              I'll share my journey — the lessons I learn in tech, stories from
              my everyday life, and reflections from my heart. It's still under
              construction, but I'm excited to take you along as I grow.
              <br />
              <span className="mt-3 md:mt-5 p-2 md:p-3 font-semibold text-[#212529] block">
                "This blog is just getting started — but so is my story."
              </span>
            </p>
          </div>
          <button className="mt-4 md:mt-6 bg-gradient-to-r from-red-800 to-red-900 text-white py-2 px-4 md:px-6 rounded-lg hover:from-red-900 hover:to-red-800 transition-all duration-300 shadow-md text-base md:text-lg">
            Join Me on This Journey
          </button>
        </section>

        <section className="flex flex-col md:flex-row gap-6 md:gap-8 text-[#212529] px-4 md:px-6 py-10 md:py-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/4">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-[#DEE2E6] rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-[#ADB5BD] absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="categories mb-8 md:mb-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#212529]">
                Categories
              </h2>
              <p className="mb-4 text-[#495057] text-sm md:text-base">
                Explore the different categories of my blog, where I share
                insights, resources, and experiences related to each theme.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      color: "white",
                      marginBottom: "10px",
                      opacity: "0.9",
                      borderRadius: "10px",
                      height: "120px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                  >
                    <a
                      href={category.link}
                      className="block py-4 px-6 hover:text-red-800"
                    >
                      <h3 className="text-lg md:text-xl font-bold">
                        {category.name}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="featured-post">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#212529]">
                Featured Posts
              </h2>
              <div className="space-y-4 md:space-y-6">
                {featuredPost.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#DEE2E6]"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-[#212529] mb-2">
                      {index + 1}. {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#495057] mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <div className="flex items-center space-x-2 md:space-x-4">
                        <span className="text-[#6C757D]">{post.date}</span>
                        <span className="bg-red-800 text-white px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <a
                        href={post.link}
                        className="text-red-800 hover:text-red-900 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4 flex justify-center">
            <div className="w-full max-w-5xl">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 p-3 md:p-5 text-[#212529]">
                  Highlights from My Journey
                </h2>
                <p className="mb-6 md:mb-8 text-[#495057] text-sm md:text-base">
                  Dive into some of my favorite posts that capture my
                  experiences and insights, and the lessons I've learned along
                  the way. From coding tips to personal reflections, these
                  stories are a glimpse into my world.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-8 md:py-14">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#DEE2E6]"
                    >
                      <div className="relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 to-[#212529]/30"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg md:text-xl font-bold">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <p className="text-sm md:text-base text-[#495057] mb-4">
                          {card.excerpt}
                        </p>
                        <a
                          href={card.link}
                          className="inline-flex items-center text-red-800 font-semibold hover:text-red-900 transition-colors duration-300 text-sm md:text-base"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:h-5 md:w-5 ml-2"
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
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F8F9FA] to-white py-10 md:py-16 px-4 md:px-6">
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#212529]">
              Subscribe to My Newsletter
            </h2>
            <p className="mb-6 md:mb-8 text-[#495057] text-sm md:text-base">
              Get the latest updates and insights from my blog delivered
              straight to your inbox. Join our community of tech enthusiasts and
              stay connected!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 md:w-96 px-4 py-2 md:py-3 rounded-lg border border-[#DEE2E6] focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-red-800 to-red-900 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg hover:from-red-900 hover:to-red-800 transition-all duration-300 font-semibold shadow-md text-sm md:text-base">
                Subscribe Now
              </button>
            </div>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-[#6C757D]">
              By subscribing, you agree to receive updates from my blog. No
              spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
