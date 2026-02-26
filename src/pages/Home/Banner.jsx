import React from "react";
import { motion } from "framer-motion";
import team1Img from "../../assets/celebrationImg.jpg";
import team2Img from "../../assets/women-in-business.jpg";
import {
  FaSearch,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLayerGroup,
} from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-linear-to-br from-[#eef2ff] via-[#f8fafc] to-[#e0e7ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT SIDE ================= */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              The{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="bg-linear-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-size-[300%_300%] bg-clip-text text-transparent">
                Easiest Way
              </motion.span>
              <br />
              to Get Your New{" "}
              <motion.span
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="bg-linear-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-size-[200%_200%] bg-clip-text text-transparent">
                Job
              </motion.span>
            </h1>

            <p className="text-gray-600 text-lg max-w-lg">
              Each month, more than 3 million job seekers turn to our platform
              in their search for work, making over 140,000 applications every
              day.
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white shadow-xl rounded-2xl p-4 md:p-6 space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Industry */}
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 transition">
                <FaBriefcase className="text-gray-400" />
                <select className="w-full bg-transparent focus:outline-none text-gray-600">
                  <option>Industry</option>
                  <option>IT & Software</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 transition">
                <FaMapMarkerAlt className="text-gray-400" />
                <select className="w-full bg-transparent focus:outline-none text-gray-600">
                  <option>Location</option>
                  <option>Remote</option>
                  <option>New York</option>
                  <option>London</option>
                  <option>Berlin</option>
                  <option>Dhaka</option>
                  <option>Toronto</option>
                </select>
              </div>

              {/* Category */}
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 transition">
                <FaLayerGroup className="text-gray-400" />
                <select className="w-full bg-transparent focus:outline-none text-gray-600">
                  <option>Category</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>
              </div>
            </div>

            {/* Keyword + Button */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter keyword..."
                className="input input-bordered w-full rounded-xl"
              />

              <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8">
                <FaSearch />
                Search
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-700">
              Popular Searches:
            </span>{" "}
            <span className="hover:text-blue-600 cursor-pointer">
              Content Writer
            </span>
            ,{" "}
            <span className="hover:text-blue-600 cursor-pointer">Finance</span>,{" "}
            <span className="hover:text-blue-600 cursor-pointer">
              Human Resource
            </span>
            ,{" "}
            <span className="hover:text-blue-600 cursor-pointer">
              Management
            </span>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative">
          {/* Floating animation */}
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            src={team1Img}
            alt="Team"
            className="rounded-3xl shadow-2xl"
          />

          <motion.img
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team2Img}
            alt="Business"
            className="absolute -bottom-10 -right-10 w-2/4 rounded-3xl shadow-xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
