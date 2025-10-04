import React from "react";
import { motion } from "framer-motion";
import cartImg from "../../assets/Cart-img.jpg";

const Login = () => {
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

      {/* Right Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-gray-900">Log in to Exclusive</h2>
        <p className="text-gray-600 mt-2 text-sm">Enter your details below</p>

        <form className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="block w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
          />

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-purple-700 transition"
            >
              Log in
            </motion.button>

            <a
              href="/reset-password"
              className="text-sm text-red-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
