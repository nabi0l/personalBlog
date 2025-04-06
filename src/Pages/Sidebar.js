
import "../CSS/output.css";
import profile from "../Images/profile.jpeg"; 
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="absolute  left-0 bg-[#C4DAD2] text-[#173B45] shadow-lg z-50 w-64 h-auto">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <FaTimes className="h-6 w-6 cursor-pointer" onClick={toggleSidebar} />
      </div>
      <div className="image-profile p-4">
        <img
          src={profile}
          alt="Profile Pic"
          className="rounded-full w-24 h-24"
        />
      </div>
      <div className="links p-4 mb-3 text-lg text-left">
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={toggleSidebar}>
                Categories
              </Link>
            </li>
          </ul>
        </nav>
        <h2 className="text-center p-5 mt-5 text-xl font-bold">Subscribe</h2>
        <p className="text-lg text-center">
          Join my newsletter to stay updated!
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
