import React, { use } from "react";
import { Link } from "react-router-dom";

const JobListsTable = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h3 className="text-xl font-semibold">No Jobs Found 😔</h3>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 overflow-x-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Job Listings</h2>

      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Logo</th>
            <th className="px-4 py-3 text-left">Job Title</th>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-left">Type</th>
            <th className="px-4 py-3 text-left">Salary</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr
              key={job._id}
              className="border-t border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3">
                <img
                  src={
                    job.company_logo || "https://i.ibb.co/mXD5MNf/facebook.png"
                  }
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </td>
              <td className="px-4 py-3 font-medium text-gray-800">
                {job.title}
              </td>
              <td className="px-4 py-3 text-gray-600">{job.company}</td>
              <td className="px-4 py-3 text-gray-600">{job.location}</td>
              <td className="px-4 py-3 text-gray-600">{job.jobType}</td>
              <td className="px-4 py-3 text-gray-600">
                {job.salaryRange?.min} - {job.salaryRange?.max}{" "}
                {job.salaryRange?.currency?.toUpperCase()}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    job.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {job.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <Link
                  to={`/jobs/${job._id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListsTable;
