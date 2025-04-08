import "../CSS/output.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#212529] py-10 md:py-14 pt-16 sm:pt-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 mt-8 sm:mt-12">
          Get in Touch
        </h1>

        <div className="max-w-3xl mx-auto">
          <form className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 md:mb-12">
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-md hover:from-red-700 hover:to-red-500 transition-all duration-300 font-medium text-sm md:text-base"
            >
              Send Message
            </button>
          </form>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              Connect with Me
            </h2>
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-[#212529] hover:text-red-800 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-[#212529] hover:text-red-800 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-[#212529] hover:text-red-800 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
