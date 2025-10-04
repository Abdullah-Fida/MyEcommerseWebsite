import React from "react";
import { motion } from "framer-motion";
import cartImg from "../../assets/Cart-img.jpg"; // 👈 image

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-50">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block w-1/2"
      >
        <img
          src={cartImg}
          alt="Cart"
          className="w-full max-w-md rounded-xl shadow-xl"
        />
      </motion.div>

      {/* Right Signup Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900">Create an account</h2>
        <p className="text-gray-600 mt-2 text-sm">Enter your details below</p>

        <form className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Name"
            className="block w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="block w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
          />

          {/* Create Account Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white py-2 rounded-md shadow-md hover:bg-purple-700 transition"
          >
            Create Account
          </motion.button>

          {/* Google Sign-in Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 border px-4 py-2 w-full rounded-md hover:bg-gray-100"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign in with Google
            </span>
          </motion.button>
        </form>

        {/* Already have account */}
        <p className="text-sm mt-6 text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
