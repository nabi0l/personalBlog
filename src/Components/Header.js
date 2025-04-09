import { useState } from "react";
import "../CSS/output.css";
import Sidebar from "../Pages/Sidebar";

import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Categories = [
    { name: "Learning Resources", id: 2 },
    { name: "Personal Journey", id: 1 },
    { name: "Projects", id: 3 },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCategoryClick = (categoryId) => {
    setIsDropdownOpen(false);
    // Navigate to categories page with the specific section
    window.location.href = `/categories#section-${categoryId}`;
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const SocialIcons = () => {
    return (
      <div className="icons flex space-x-2 sm:space-x-3 text-red-800">
        <a
          href="https://github.com/nabi0l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a href="https://t.me/nabi0l" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a
          href="https://www.instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F7] text-[#212529] shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2 sm:py-4 px-3 sm:px-4 md:px-6">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <p className="text-sm sm:text-lg font-semibold hover:text-red-800 cursor-pointer">
              Write
            </p>
            <p className="text-sm sm:text-lg font-semibold hover:text-red-800 cursor-pointer">
              Sign in
            </p>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            From Variables to Vision
          </h1>
          <div className="flex items-center">
            <SocialIcons />
          </div>
        </div>

        <nav className="border-t border-gray-200">
          <div className="flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4 md:px-6">
            <div className="flex items-center">
              <FaBars
                className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-[#212529]"
                onClick={toggleSidebar}
              />
            </div>
            <ul className="flex space-x-3 sm:space-x-6 md:space-x-8 text-sm sm:text-base">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-800" : "text-[#212529]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-red-800" : "text-[#212529]"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="relative">
                <div className="flex items-center cursor-pointer">
                  <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                      isActive ? "text-red-800 mr-1" : "text-[#212529] mr-1"
                    }
                  >
                    Categories
                  </NavLink>
                  <FaChevronDown
                    className="ml-1 cursor-pointer text-[#212529] h-3 w-3 sm:h-4 sm:w-4"
                    onClick={toggleDropdown}
                  />
                </div>
                {isDropdownOpen && (
                  <div className="absolute bg-white text-[#212529] p-2 rounded shadow-lg z-10 right-0 sm:right-auto">
                    <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                      {Categories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => handleCategoryClick(category.id)}
                            className="hover:text-red-800 transition-colors whitespace-nowrap"
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "text-red-800" : "text-[#212529]"
                  }
                >
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-red-800" : "text-[#212529]"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </header>
  );
};

export default Header;
