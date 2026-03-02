import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ApplicationsStats = ({ applications = [] }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-indigo-50 py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            My Applications
          </h1>
          <p className="text-gray-500">
            You have applied to {applications.length} jobs
          </p>
        </div>

        {/* Empty State */}
        {applications.length === 0 && (
          <div className="text-center py-20">
            <FaFileAlt className="mx-auto text-5xl text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              You haven't applied to any jobs yet.
            </p>
          </div>
        )}

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <motion.div
              key={app._id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition duration-300">
              {/* Company Logo & Job Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={
                    app.company_logo || "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt={app.company}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {app.title || "Job Title"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {app.company || "Company Name"}
                  </p>
                </div>
              </div>

              {/* Applicant Info */}
              <div className="flex items-center gap-3 text-gray-600 mb-2">
                <FaEnvelope className="text-indigo-500" />
                <span className="text-sm">{app.applicant}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 mb-4">
                <FaPhone className="text-indigo-500" />
                <span className="text-sm">{app.phone}</span>
              </div>

              {/* Cover Letter */}
              {app.coverLetter && (
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {app.coverLetter}
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                  <FaFileAlt />
                  Resume
                </a>

                <Link
                  to={`/jobs/${app.jobId}`}
                  className="flex-1 flex items-center justify-center gap-2 border border-indigo-500 text-indigo-600 py-2 rounded-xl hover:bg-indigo-50 transition">
                  View Job
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsStats;
