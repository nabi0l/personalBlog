import "../CSS/output.css";
import profile from "../Images/profile.jpeg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="absolute left-0 bg-[#F5F5F7] text-[#212529] shadow-lg z-50 w-56 sm:w-64 h-auto max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center p-3 md:p-4">
        <h2 className="text-lg md:text-xl font-bold">Menu</h2>
        <FaTimes
          className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="image-profile p-3 md:p-4">
        <img
          src={profile}
          alt="Profile Pic"
          className="rounded-full w-20 h-20 md:w-24 md:h-24 mx-auto"
        />
      </div>
      <div className="links p-3 md:p-4 mb-2 md:mb-3 text-base md:text-lg text-left">
        <nav>
          <ul className="space-y-2 md:space-y-3">
            <li>
              <Link
                to="/"
                onClick={toggleSidebar}
                className="hover:text-red-800 transition-colors block py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleSidebar}
                className="hover:text-red-800 transition-colors block py-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleSidebar}
                className="hover:text-red-800 transition-colors block py-1"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                onClick={toggleSidebar}
                className="hover:text-red-800 transition-colors block py-1"
              >
                Categories
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className="text-center p-3 md:p-5 mt-4 md:mt-5 text-lg md:text-xl font-bold">
          Subscribe
        </h2>
        <p className="text-base md:text-lg text-center">
          Join my newsletter to stay updated!
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
