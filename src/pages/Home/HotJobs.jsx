import React, { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/jobs");

        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // 🔄 Loading Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">{error}</h2>
        <p className="text-gray-500 mt-2">Please try again later.</p>
      </div>
    );
  }

  // ✅ Success UI
  return (
    <section className="bg-linear-to-br from-[#eef2ff] via-[#f8fafc] to-[#e0e7ff] overflow-hidden">
      <h2 className="text-3xl font-bold pt-10 text-center">Hot Jobs</h2>
      <div className="max-w-7xl mx-auto py-10 px-6 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotJobs;
