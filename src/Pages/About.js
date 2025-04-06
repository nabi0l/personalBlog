import React from "react";
import Image from "../Images/profile.jpeg";
import "../CSS/output.css"; // Assuming you have your Tailwind styles in this file

const About = () => {
  return (
    <div className="bg-[#E9EFEC] text-[#173B45] py-14 px-6 pt-52">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-6">
          A little about who I am and why I started this blog.
        </p>
      </section>

      {/* Your Story */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-left ">My Story</h2>
        <p className="text-lg text-left px-8">
          Hi, I’m Abigail! My journey into software engineering started when I
          was fascinated by the way websites and apps worked. As a child, I
          always loved solving problems, and coding seemed like the perfect
          blend of creativity and logic.
          <br />
          Fast forward to today, I’m a passionate software engineering student,
          diving deep into the world of code, algorithms, and design. The more I
          learn, the more I realize how vast this field is, and I’m excited to
          continue growing.
          <br />
          What motivates me is the ability to create and build things that can
          change lives — whether it’s through a small personal project or a
          large-scale web application.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-left">Mission</h2>
        <p className="text-lg text-left px-8">
          The purpose of this blog is to document my journey as a software
          engineering student. I want to share the highs and lows, the lessons I
          learn, and the cool projects I get to work on. I hope that through
          this blog, I can inspire others to follow their passions in tech and
          provide insights into the day-to-day life of a student in this field.
          <br />
          Through tutorials, personal stories, and tech insights, I aim to make
          this space a hub for both aspiring developers and those looking to
          grow in their career. Join me as I learn, fail, and succeed!
        </p>
      </section>

      {/* Fun Facts */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-left">Fun Facts </h2>
        <ul className="list-disc list-inside text-lg text-left px-8">
          <li>
            I love reading fantasy novels – they help me unwind after long
            coding sessions!
          </li>
          <li>
            I'm a huge fan of photography and enjoy taking nature shots during
            my travels.
          </li>
          <li>
            When I'm not coding, I love to experiment with graphic design and
            user interface design.
          </li>
          <li>
            I'm also passionate about volunteer work and enjoy contributing to
            community projects whenever I can.
          </li>
        </ul>
      </section>

      {/* Photo */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Here’s Me!</h2>
        <img
          src={Image} // Replace with the path to your photo
          alt="Abigail"
          className="w-48 h-48 rounded-full mx-auto shadow-lg"
        />
      </section>
    </div>
  );
};

export default About;
