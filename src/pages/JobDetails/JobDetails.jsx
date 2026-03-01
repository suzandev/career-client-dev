import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaArrowLeft,
  FaBookmark,
  FaBuilding,
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company = "Tech Solutions Ltd",
    skills = ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  } = job;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-blue-100 py-12 px-4 md:px-10">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition mb-8">
        <FaArrowLeft /> Back to Jobs
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
            <p className="flex items-center gap-2 text-gray-500 mt-2">
              <FaBuilding /> {company}
            </p>
          </div>

          {/* Info Row */}
          <div className="flex flex-wrap gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-500" />
              {location}
            </span>

            <span className="flex items-center gap-2">
              <FaBriefcase className="text-indigo-500" />
              {jobType}
            </span>

            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-indigo-500" />
              Deadline: {applicationDeadline}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Job Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Required Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium hover:bg-indigo-200 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl shadow-2xl p-8 h-fit space-y-6 sticky top-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Salary Range
            </h3>
            <p className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
              <FaMoneyBillWave />
              {salaryRange?.min} - {salaryRange?.max}{" "}
              {salaryRange?.currency?.toUpperCase()}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <span className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-xl shadow-lg">
            Apply Now
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-50 transition">
            <FaBookmark />
            Save Job
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default JobDetails;
