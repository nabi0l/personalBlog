import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import FirstCodingProject from "./Pages/Blog/FirstCodingProject";
import LearningReact from "./Pages/Blog/LearningReact";
import BuildingPortfolio from "./Pages/Blog/BuildingPortfolio";
import OpenSourceContribution from "./Pages/Blog/OpenSourceContribution";
import TechStackJourney from "./Pages/Blog/TechStackJourney";
import Search from "./Components/Search";
import SearchResults from "./Pages/SearchResults";

const cards = [
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
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search cards={cards} />} />
          <Route
            path="/search-results"
            element={<SearchResults cards={cards} />}
          />

          <Route
            path="/blog/first-coding-project"
            element={<FirstCodingProject />}
          />
          <Route path="/blog/learning-react" element={<LearningReact />} />
          <Route
            path="/blog/building-portfolio"
            element={<BuildingPortfolio />}
          />
          <Route
            path="/blog/open-source-contribution"
            element={<OpenSourceContribution />}
          />
          <Route
            path="/blog/tech-stack-journey"
            element={<TechStackJourney />}
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
