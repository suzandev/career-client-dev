import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [logoPreview, setLogoPreview] = useState("");
  const [formData, setFormData] = useState({});

  // Save step data before next
  const nextStep = (e) => {
    e.preventDefault();
    const form = e.target.form;

    const stepData = Object.fromEntries(new FormData(form).entries());
    setFormData((prev) => ({ ...prev, ...stepData }));

    // ================= STEP 1 VALIDATION =================
    if (step === 1) {
      if (!stepData.title?.trim()) {
        toast.error("Job title is required 🚨");
        return;
      }
      if (!stepData.company?.trim()) {
        toast.error("Company name is required 🏢");
        return;
      }
    }

    // ================= STEP 2 VALIDATION =================
    if (step === 2) {
      if (!stepData.salaryMin || !stepData.salaryMax) {
        toast.error("Salary range is required 💰");
        return;
      }
      if (Number(stepData.salaryMin) > Number(stepData.salaryMax)) {
        toast.error("Minimum salary cannot be greater than maximum salary ❌");
        return;
      }
      if (!stepData.deadline) {
        toast.error("Application deadline is required 📅");
        return;
      }
      if (!stepData.description?.trim()) {
        toast.error("Job description is required 📝");
        return;
      }
    }

    // ================= STEP 3 VALIDATION =================
    if (step === 3) {
      if (!stepData.requirements?.trim()) {
        toast.error("Requirements cannot be empty 📌");
        return;
      }
      if (!stepData.responsibilities?.trim()) {
        toast.error("Responsibilities cannot be empty 🎯");
        return;
      }
      if (!stepData.hr_name?.trim()) {
        toast.error("HR name is required 👤");
        return;
      }
      if (!stepData.hr_email?.trim()) {
        toast.error("HR email is required 📧");
        return;
      }
    }

    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleLogoChange = (e) => {
    setLogoPreview(e.target.value);
    setFormData((prev) => ({ ...prev, company_logo: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use formData state to get all steps data
    const finalData = { ...formData };

    // Make sure requirements/responsibilities are arrays
    const jobData = {
      title: finalData.title,
      company: finalData.company,
      location: finalData.location,
      jobType: finalData.jobType,
      category: finalData.category,
      company_logo: finalData.company_logo,
      salaryRange: {
        min: Number(finalData.salaryMin),
        max: Number(finalData.salaryMax),
        currency: finalData.currency || "bdt",
      },
      applicationDeadline: finalData.deadline,
      status: finalData.status,
      description: finalData.description,
      requirements:
        finalData.requirements?.split(",").map((r) => r.trim()) || [],
      responsibilities:
        finalData.responsibilities?.split(",").map((r) => r.trim()) || [],
      hr_name: finalData.hr_name || user?.name || "",
      hr_email: finalData.hr_email || user?.email || "",
    };

    console.log("💎 Job Submitted:", jobData);
    toast.success("Job Added Successfully 🎉", { theme: "colored" });
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
                    defaultValue={formData.title || ""}
                    placeholder="Job Title"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="company"
                    defaultValue={formData.company || ""}
                    placeholder="Company Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="location"
                    defaultValue={formData.location || ""}
                    placeholder="Location"
                    className="input input-bordered w-full"
                  />

                  <select
                    name="jobType"
                    defaultValue={formData.jobType || ""}
                    className="select select-bordered w-full">
                    <option value="">Job Type</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Onsite</option>
                  </select>

                  <input
                    name="category"
                    defaultValue={formData.category || ""}
                    placeholder="Category"
                    className="input input-bordered w-full"
                  />

                  <div>
                    <input
                      name="company_logo"
                      placeholder="Company Logo URL"
                      onChange={handleLogoChange}
                      value={formData.company_logo || ""}
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
                    defaultValue={formData.salaryMin || ""}
                    placeholder="Salary Min"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="salaryMax"
                    type="number"
                    defaultValue={formData.salaryMax || ""}
                    placeholder="Salary Max"
                    className="input input-bordered w-full"
                  />

                  <select
                    name="currency"
                    defaultValue={formData.currency || "bdt"}
                    className="select select-bordered w-full">
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                  </select>

                  <input
                    name="deadline"
                    type="date"
                    defaultValue={formData.deadline || ""}
                    className="input input-bordered w-full"
                  />

                  <select
                    name="status"
                    defaultValue={formData.status || ""}
                    className="select select-bordered w-full">
                    <option value="">Status</option>
                    <option>active</option>
                    <option>closed</option>
                  </select>

                  <textarea
                    name="description"
                    defaultValue={formData.description || ""}
                    placeholder="Job Description"
                    className="textarea textarea-bordered md:col-span-2 w-full"></textarea>
                </div>
              )}

              {/* ================= STEP 3 ================= */}
              {step === 3 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <textarea
                    name="requirements"
                    value={formData.requirements || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        requirements: e.target.value,
                      }))
                    }
                    placeholder="Job Requirements (comma separated)"
                    className="textarea textarea-bordered w-full"
                  />

                  <textarea
                    name="responsibilities"
                    value={formData.responsibilities || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        responsibilities: e.target.value,
                      }))
                    }
                    placeholder="Responsibilities (comma separated)"
                    className="textarea textarea-bordered w-full"
                  />

                  <input
                    name="hr_name"
                    value={formData.hr_name || user?.name || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hr_name: e.target.value,
                      }))
                    }
                    placeholder="HR Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    name="hr_email"
                    type="email"
                    value={formData.hr_email || user?.email || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hr_email: e.target.value,
                      }))
                    }
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
