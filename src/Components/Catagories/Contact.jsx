import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-red-50 via-purple-50 to-purple-100 px-6 py-12 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-red-600 font-semibold">Contact</span>
      </div>

      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-red-600 mb-12"
      >
        Contact Us
      </motion.h2>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-red-50 rounded-lg shadow-lg p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-red-700 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Fill out the form or use the contact
            details below.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="hover:text-red-600 transition-colors">
              📍 <span className="font-medium">Address:</span> Lahore, Pakistan
            </li>
            <li className="hover:text-red-600 transition-colors">
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:abdullah@example.com"
                className="text-red-600 hover:underline"
              >
                abdullah@example.com
              </a>
            </li>
            <li className="hover:text-red-600 transition-colors">
              📞 <span className="font-medium">Phone:</span> +92 300 1234567
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/abdullah"
              target="_blank"
              rel="noreferrer"
              className="text-red-600 hover:text-red-800 text-2xl transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Abdullah-Fida"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-gray-900 text-2xl transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-red-50 rounded-lg shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-600 outline-none transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-600 outline-none transition"
            />
          </div>

          <input
            type="email"
            placeholder="Your Email"
            className="mt-6 border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-600 outline-none transition"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="mt-6 border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-red-600 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-md font-semibold hover:from-red-700 hover:to-red-800 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
