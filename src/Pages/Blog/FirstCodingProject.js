import "../../CSS/output.css";
import { Link } from "react-router-dom";

const FirstCodingProject = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Back to Home Link */}
        {/* <Link
          to="/"
          className="inline-flex items-center text-red-800 hover:text-red-900 mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link> */}

        {/* Blog Header */}
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212529] mb-4 mt-4">
            My First Coding Project
          </h1>
          <div className="flex items-center text-[#6C757D] text-sm md:text-base">
            <span>March 15, 2024</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Calculator App"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg max-w-none text-justify">
          <p className="text-[#495057] mb-6 text-center">
            A simple calculator app that sparked my passion for creating useful
            tools through code.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Beginning
          </h2>
          <p className="text-[#495057] mb-6">
            My journey into coding began with a simple idea: creating a
            calculator app. What started as a basic project turned into an
            eye-opening experience that would shape my future in software
            development.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Challenge
          </h2>
          <p className="text-[#495057] mb-6">
            Building a calculator might seem straightforward, but for a
            beginner, it presented numerous challenges. From understanding basic
            arithmetic operations to handling user input, each step was a
            learning opportunity.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            Key Learnings
          </h2>
          <ul className="list-disc pl-6 mb-6 text-[#495057]">
            <li className="mb-2">
              Understanding basic JavaScript syntax and functions
            </li>
            <li className="mb-2">Working with DOM manipulation</li>
            <li className="mb-2">Handling user input and validation</li>
            <li className="mb-2">Implementing basic arithmetic operations</li>
            <li className="mb-2">Creating a user-friendly interface</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Impact
          </h2>
          <p className="text-[#495057] mb-6">
            This project taught me more than just coding - it showed me the
            power of creating something from scratch. The satisfaction of seeing
            my calculator work, despite its simplicity, was incredibly
            motivating.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            Moving Forward
          </h2>
          <p className="text-[#495057] mb-6">
            This first project was just the beginning. It sparked my curiosity
            and led me to explore more complex projects, eventually leading me
            to where I am today in my coding journey.
          </p>
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-[#DEE2E6]">
          <h3 className="text-xl font-bold text-[#212529] mb-4">
            Share this post
          </h3>
          <div className="flex space-x-4">
            <button className="text-[#6C757D] hover:text-red-800 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className="text-[#6C757D] hover:text-red-800 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCodingProject;
