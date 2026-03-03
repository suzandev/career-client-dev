import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const AddJob = () => {
  const [step, setStep] = useState(1);
  const [logoPreview, setLogoPreview] = useState("");

  const nextStep = (e) => {
    e.preventDefault();
    const form = e.target.form;

    // ================= STEP 1 =================
    if (step === 1) {
      if (!form.title.value.trim()) {
        toast.error("Job title is required 🚨");
        return;
      }

      if (!form.company.value.trim()) {
        toast.error("Company name is required 🏢");
        return;
      }
    }

    // ================= STEP 2 =================
    if (step === 2) {
      if (!form.salaryMin.value || !form.salaryMax.value) {
        toast.error("Salary range is required 💰");
        return;
      }
      if (Number(form.salaryMin.value) > Number(form.salaryMax.value)) {
        toast.error("Minimum salary cannot be greater than maximum salary ❌");
        return;
      }

      if (!form.deadline.value) {
        toast.error("Application deadline is required 📅");
        return;
      }

      if (!form.description.value.trim()) {
        toast.error("Job description is required 📝");
        return;
      }
    }

    // ================= STEP 3 =================
    if (step === 3) {
      if (!form.requirements.value.trim()) {
        toast.error("Requirements field cannot be empty 📌");
        return;
      }

      if (!form.responsibilities.value.trim()) {
        toast.error("Responsibilities field cannot be empty 🎯");
        return;
      }

      if (!form.hr_name.value.trim()) {
        toast.error("HR name is required 👤");
        return;
      }

      if (!form.hr_email.value.trim()) {
        toast.error("HR email is required 📧");
        return;
      }
    }

    // If everything valid
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleLogoChange = (e) => {
    setLogoPreview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const jobData = {
      title: form.title.value,
      company: form.company.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      company_logo: form.company_logo.value,
      salaryRange: {
        min: form.salaryMin.value,
        max: form.salaryMax.value,
        currency: "bdt",
      },
      applicationDeadline: form.deadline.value,
      status: form.status.value,
      description: form.description.value,
      requirements: form.requirements.value.split(","),
      responsibilities: form.responsibilities.value.split(","),
      hr_name: form.hr_name.value,
      hr_email: form.hr_email.value,
    };

    console.log(jobData);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Add New Job</h2>

        {/* Step Indicator */}
        <div className="flex justify-center gap-4 mb-10">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition 
              ${step >= num ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
              {num}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              className="space-y-6">
              {/* ================= STEP 1 ================= */}
              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="title"
                    placeholder="Job Title"
                    required
                    className="input input-bordered w-full"
                  />

                  <input
                    name="company"
                    placeholder="Company Name"
                    required
                    className="input input-bordered w-full"
                  />

                  <input
                    name="location"
                    placeholder="Location"
                    className="input input-bordered w-full"
                  />

                  <select
                    name="jobType"
                    className="select select-bordered w-full">
                    <option value="">Job Type</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Onsite</option>
                  </select>

                  <input
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />

                  <div>
                    <input
                      name="company_logo"
                      placeholder="Company Logo URL"
                      onChange={handleLogoChange}
                      className="input input-bordered w-full"
                    />
                    {logoPreview && (
                      <img
                        src={logoPreview}
                        alt="Preview"
                        className="mt-3 w-16 h-16 rounded-lg object-cover border"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* ================= STEP 2 ================= */}
              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="salaryMin"
                    type="number"
                    placeholder="Salary Min"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="salaryMax"
                    type="number"
                    placeholder="Salary Max"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="deadline"
                    type="date"
                    className="input input-bordered w-full"
                  />

                  <select
                    name="status"
                    className="select select-bordered w-full">
                    <option value="">Status</option>
                    <option>active</option>
                    <option>closed</option>
                  </select>

                  <textarea
                    name="description"
                    placeholder="Job Description"
                    className="textarea textarea-bordered md:col-span-2 w-full"></textarea>
                </div>
              )}

              {/* ================= STEP 3 ================= */}
              {step === 3 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <textarea
                    name="requirements"
                    placeholder="Requirements (comma separated)"
                    className="textarea textarea-bordered w-full"></textarea>

                  <textarea
                    name="responsibilities"
                    placeholder="Responsibilities (comma separated)"
                    className="textarea textarea-bordered w-full"></textarea>

                  <input
                    name="hr_name"
                    placeholder="HR Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="hr_email"
                    type="email"
                    placeholder="HR Email"
                    className="input input-bordered w-full"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition">
                Previous
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                Submit Job
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
