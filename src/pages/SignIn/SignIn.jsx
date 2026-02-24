import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import illustration from "../../assets/signIn.jpg";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-5xl flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden">
        {/* Left Image */}
        <div className="lg:flex-1 hidden lg:flex items-center justify-center bg-gray-50 p-10">
          <img
            src={illustration}
            alt="Sign In Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form */}
        <div className="lg:flex-1 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sign In</h2>

          <form onSubmit={handleSignIn} className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 px-1 text-gray-700 transition-all"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 px-1 text-gray-700 transition-all"
              required
            />

            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 rounded-md font-semibold">
              Log In
            </button>
          </form>

          {/* Login Footer */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <Link
              to="/register"
              className="text-sm text-gray-600 hover:underline">
              Create an account
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm text-gray-500">Or login with</span>
              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
                  <FaFacebookF />
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors">
                  <FaTwitter />
                </button>
                <button className="bg-gray-600 hover:bg-gray-900 text-white p-2 rounded-full transition-colors">
                  <FcGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
