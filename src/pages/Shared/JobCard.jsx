import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-14 h-14 rounded-xl object-cover border"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          {location}
        </p>

        <p className="flex items-center gap-2">
          <FaBriefcase className="text-primary" />
          {jobType} • {category}
        </p>

        <p className="flex items-center gap-2">
          <FaMoneyBillWave className="text-primary" />৳
          {salaryRange.min.toLocaleString()} - ৳
          {salaryRange.max.toLocaleString()}{" "}
          <span className="uppercase">({salaryRange.currency})</span>
        </p>
      </div>

      {/* Requirements Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
            {skill}
          </span>
        ))}
      </div>

      {/* Deadline */}
      <p className="text-xs text-gray-400 mb-4">
        Deadline: {applicationDeadline}
      </p>

      {/* Button */}
      <Link to={`/jobs/${_id}`}>
        <button className="w-full bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 transition cursor-pointer">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
