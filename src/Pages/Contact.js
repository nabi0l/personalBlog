import React from "react";
import "../CSS/output.css"; 

const Contact = () => {
  return (
    <div className="bg-[#E9EFEC] text-[#173B45] py-20 px-6 pt-52 min-h-screen">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-xl mb-6">
          I’d love to hear from you! Whether you have questions, suggestions, or
          just want to say hello, feel free to reach out.
        </p>
      </section>

      <section className="mx-auto mb-12 flex flex-wrap">
     
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-6">
          <h2 className="text-3xl font-semibold mb-4">Send Me a Message</h2>
          <form className="space-y-6 flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-[#173B45] focus:outline-none focus:ring-2 focus:ring-[#173B45] mb-4"
              placeholder="Your Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-[#173B45] focus:outline-none focus:ring-2 focus:ring-[#173B45] mb-4"
              placeholder="Your Email"
            />
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 rounded-md border border-[#173B45] focus:outline-none focus:ring-2 focus:ring-[#173B45] mb-4"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#173B45] text-white py-2 px-6 rounded-md text-xl font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-3xl font-semibold mb-4">Follow Me</h2>
          <p className="text-lg mb-6">
            Stay connected through my social media profiles:
          </p>
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173B45] text-2xl block"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173B45] text-2xl block"
            >
              Twitter
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#173B45] text-2xl block"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
