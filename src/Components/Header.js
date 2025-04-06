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
      <div className="icons flex space-x-3">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    );
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50  shadow-md"
      style={{
        background: "#E9EFEC",
      }}
    >
      <div className="upper flex justify-between items-center mx-10 py-2">
        <div className="left flex items-center space-x-4 cursor-pointer">
          <p className="text-lg font-semibold">Write</p>
          <p className="text-lg font-semibold">Sign in</p>
        </div>
        <h1 className="text-3xl font-bold p-5">From Variables to Vision</h1>
        <div className="right ">
          <SocialIcons />
        </div>
      </div>

      <div
        className="flex justify-between items-center text-white p-4 relative"
        style={{
          background: "#C4DAD2",
        }}
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex justify-start">
            <FaBars
              className="h-6 w-6 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <ul className="flex space-x-8 p-3 text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
              >
                About
              </NavLink>
            </li>
            <li className="relative group">
              <div className="flex items-center cursor-pointer">
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 mr-1" : "text-gray-500 mr-1"
                  }
                >
                  Categories
                </NavLink>
                <FaChevronDown
                  className="ml-1 cursor-pointer"
                  onClick={toggleDropdown}
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute bg-white text-black p-2 w-[auto] rounded shadow-lg z-10">
                  <ul className="space-y-2">
                    {Categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => handleCategoryClick(category.id)}
                          className="hover:text-blue-500 transition-colors"
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
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </div>
  );
};

export default Header;
