import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import signupImage from "../../assets/registerImg.jpg";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* ============ LEFT SIDE (FORM) ============ */}
        <div className="p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sign up</h2>

          <form className="space-y-6" onSubmit={handleRegister}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-400 text-sm" />
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full border-b border-gray-300 pl-10 pb-2 pt-3 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400 text-sm" />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full border-b border-gray-300 pl-10 pb-2 pt-3 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-gray-400 text-sm" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 pl-10 pb-2 pt-3 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-gray-400 text-sm" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                className="w-full border-b border-gray-300 pl-10 pb-2 pt-3 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <p>
                I agree all statements in{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Terms of service
                </span>
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 shadow-sm">
              Register
            </button>

            {/* Login Link */}
            <div className="pt-4 text-sm text-gray-600">
              <h3>
                Already have an account?{" "}
                <span>
                  <Link
                    to="/signin"
                    className="hover:underline text-primary font-semibold">
                    Login Here
                  </Link>
                </span>
              </h3>
            </div>
          </form>
        </div>

        {/* ============ RIGHT SIDE (IMAGE) ============ */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 ">
          <img
            src={signupImage}
            alt="Signup Illustration"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
