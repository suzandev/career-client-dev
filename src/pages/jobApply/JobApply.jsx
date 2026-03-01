import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const JobApply = () => {
  const navigate = useNavigate();
  const { id: jobId } = useParams();

  const { user } = useAuth();

  console.log(jobId, user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const resume = form.resume.value;
    const coverLetter = form.coverLetter.value;

    console.log({ name, email, phone, resume, coverLetter });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 relative">
          {/* Close Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 right-5 text-gray-500 hover:text-red-500 transition">
            <FaTimes size={20} />
          </button>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Apply for{" "}
            <Link to={`/jobs/${jobId}`} className="text-indigo-600 underline">
              this job
            </Link>
          </h2>
          <p className="text-gray-500 mb-6">
            Fill out the form below to submit your application.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute top-4 left-4 text-gray-400" />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            {/* Resume Link */}
            <input
              type="url"
              name="resume"
              required
              placeholder="Resume Link (Google Drive / Portfolio)"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            {/* Cover Letter */}
            <textarea
              name="coverLetter"
              rows="4"
              placeholder="Cover Letter (Optional)"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"></textarea>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition">
                Submit Application
              </button>

              <button
                onClick={() => navigate(-1)}
                type="button"
                className="flex-1 border border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition">
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JobApply;
