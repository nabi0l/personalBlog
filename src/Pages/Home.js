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
      title: "My Coding Journey",
      excerpt:
        "Exploring the world of software engineering, one line of code at a time. Join me as I share my experiences and lessons learned.",
      link: "/categories#section-1",
      image: JourneyImage,
    },
    {
      title: "Learning Resources",
      excerpt:
        "Discover the tools, platforms, and resources that have helped me grow as a developer. From online courses to community learning.",
      link: "/categories#section-2",
      image: LearningImage,
    },
    {
      title: "Project Showcase",
      excerpt:
        "Take a look at my latest projects and see how I'm applying my skills to build real-world applications.",
      link: "/categories#section-3",
      image: ProjectImage,
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
    <div>
      <div className="hero min-h-screen pt-32 bg-[#E9EFEC]">
        <section className="bg-[#16423C] text-[#E9EFEC] py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Abigail 👋</h1>
          <p className="mb-6 text-2xl">
            A software engineering student & lifestyle blogger in the making.
          </p>
          <div className="text-xl">
            <p>
              Welcome to my space on the internet! I'm Abigail Getachew — a
              software engineering student, faith-driven dreamer, and someone
              learning to balance code, creativity, and life. This blog is where
              I'll share my journey — the lessons I learn in tech, stories from
              my everyday life, and reflections from my heart. It's still under
              construction, but I'm excited to take you along as I grow.
              <br />
              <span className="mt-5 p-3 font-semibold ">
                "This blog is just getting started — but so is my story."
              </span>
            </p>
          </div>
          <button className="mt-6 bg-[#173B45] text-white py-2 px-4 rounded">
            Join Me on This Journey
          </button>
        </section>

        <section className="flex flex-col md:flex-row gap-8 text-[#173B45] px-6 py-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/4">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="categories mb-10">
              <h2 className="text-2xl font-bold mb-2">Categories</h2>
              <p className="mb-4">
                Explore the different categories of my blog, where I share
                insights, resources, and experiences related to each theme.
              </p>
              <div>
                {categories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      color: "white",
                      marginBottom: "15px",
                      opacity: "0.9",
                      borderRadius: "10px",
                      height: "150px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                  >
                    <a
                      href={category.link}
                      className="block py-4 px-6 hover:[#16423C]"
                    >
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="featured-post">
              <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
              <div className="space-y-6">
                {featuredPost.map((post, index) => (
                  <div
                    key={index}
                    className="bg-[#F0F4F8] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-[#173B45] mb-2">
                      {index + 1}. {post.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{post.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500">{post.date}</span>
                        <span className="bg-[#173B45] text-white px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <a
                        href={post.link}
                        className="text-[#173B45] hover:text-[#2a5a6a] font-medium"
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
                <h2 className="text-3xl font-bold mb-4 p-5">
                  Highlights from My Journey
                </h2>
                <p className="mb-8 text-gray-600">
                  Dive into some of my favorite posts that capture my
                  experiences and insights, and the lessons I've learned along
                  the way. From coding tips to personal reflections, these
                  stories are a glimpse into my world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{card.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{card.excerpt}</p>
                        <a
                          href={card.link}
                          className="inline-flex items-center text-[#173B45] font-semibold hover:text-[#2a5a6a] transition-colors duration-300"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
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

        <section className="flex flex-col items-center justify-center bg-[#C4DAD2] py-16 px-6">
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#173B45]">
              Subscribe to My Newsletter
            </h2>
            <p className="mb-8 text-gray-600">
              Get the latest updates and insights from my blog delivered
              straight to your inbox. Join our community of tech enthusiasts and
              stay connected!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-96 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#173B45] focus:border-transparent"
              />
              <button className="w-full sm:w-auto bg-[#173B45] text-white py-3 px-8 rounded-lg hover:bg-[#2a5a6a] transition-colors duration-300 font-semibold">
                Subscribe Now
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
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
