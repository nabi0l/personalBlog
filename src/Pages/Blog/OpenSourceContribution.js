import "../../CSS/output.css";
import { Link } from "react-router-dom";

const OpenSourceContribution = () => {
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
            My Open Source Contribution
          </h1>
          <div className="flex items-center text-[#6C757D] text-sm md:text-base">
            <span>March 1, 2024</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Open Source Contribution"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg max-w-none text-justify">
          <p className="text-[#495057] mb-6 text-center">
            How I made my first contribution to an open source project and what
            I learned from the experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Beginning
          </h2>
          <p className="text-[#495057] mb-6">
            My journey into open source began with a simple bug fix. What
            started as a small contribution turned into an invaluable learning
            experience about collaboration, code review, and community
            engagement.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            Finding the Right Project
          </h2>
          <p className="text-[#495057] mb-6">
            Choosing the right project to contribute to was crucial. I looked
            for projects that aligned with my interests and skill level,
            ensuring I could make meaningful contributions while learning.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Contribution Process
          </h2>
          <ul className="list-disc pl-6 mb-6 text-[#495057]">
            <li className="mb-2">Understanding the project structure</li>
            <li className="mb-2">Reading contribution guidelines</li>
            <li className="mb-2">Creating a fork and branch</li>
            <li className="mb-2">Making the changes</li>
            <li className="mb-2">Submitting a pull request</li>
            <li className="mb-2">Addressing feedback</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            Key Learnings
          </h2>
          <p className="text-[#495057] mb-6">
            The open source community taught me valuable lessons about code
            quality, documentation, and collaboration. I learned how to write
            better code, communicate effectively, and work with others in a
            distributed environment.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            The Impact
          </h2>
          <p className="text-[#495057] mb-6">
            Contributing to open source has had a significant impact on my
            development skills and professional growth. It's helped me build a
            portfolio, network with other developers, and gain real-world
            experience.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mt-8 mb-4">
            Moving Forward
          </h2>
          <p className="text-[#495057] mb-6">
            My first contribution was just the beginning. I'm now actively
            looking for more opportunities to contribute to open source projects
            and give back to the community that has helped me grow as a
            developer.
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

export default OpenSourceContribution;
