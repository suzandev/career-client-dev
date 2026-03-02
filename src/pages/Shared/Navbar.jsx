import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContexts/AuthContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Employer", path: "/employer" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const updatedNavLinks = user
    ? [...navLinks, { name: "My Applications", path: "/myApplications" }]
    : navLinks;

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              {updatedNavLinks.map((link) => (
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
            <span className="md:text-2xl font-bold tracking-tight">
              <span className="text-blue-600">Jobs</span>{" "}
              <span className="text-gray-900">Portal</span>
            </span>
            <span className="hidden md:flex justify-center items-center text-xs text-gray-500 tracking-widest">
              ONLINE JOBS FINDER
            </span>
          </Link>
        </div>

        {/* ============ CENTER SECTION (Desktop) ============ */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 font-medium text-gray-700">
            {updatedNavLinks.map((link) => (
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
          {user ? (
            <>
              {/* User Info */}
              <div className="hidden md:flex items-center gap-3 px-3 py-1 rounded-full bg-gray-100">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition duration-300 shadow-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Link
                to="/signin"
                className="hidden sm:inline-flex px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                Sign In
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300 shadow-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
