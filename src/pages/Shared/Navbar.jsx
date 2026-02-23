import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Employer", path: "/employer" },
  { name: "Candidate", path: "/candidate" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* ============ LEFT SECTION ============ */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBars className="text-xl" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow-lg bg-white rounded-box w-56 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-600 transition"
                    }>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-blue-600">Jobs</span>{" "}
              <span className="text-gray-900">Portal</span>
            </span>
            <span className="text-xs text-gray-500 tracking-widest">
              ONLINE JOBS FINDER
            </span>
          </Link>
        </div>

        {/* ============ CENTER SECTION (Desktop) ============ */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative hover:text-blue-600 transition duration-300 ${
                      isActive ? "text-blue-600 font-semibold" : ""
                    }`
                  }>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ============ RIGHT SECTION ============ */}
        <div className="navbar-end items-center gap-4">
          {/* Sign In */}
          <Link
            to="/signin"
            className="hidden sm:inline-flex px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition duration-300">
            Sign In
          </Link>

          {/* Register */}
          <Link
            to="/register"
            className="px-6 py-2 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition duration-300 shadow-sm">
            Register
          </Link>

          {/* Avatar */}
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FaUserCircle className="text-xl text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
