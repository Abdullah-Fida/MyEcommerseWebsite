import React from "react";
import { motion } from "framer-motion";

const StatsUI = () => {
  const stats = [
    {
      id: 1,
      number: "10.5k",
      text: "Sellers active on our site",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75h18M4.5 6h15M7.5 3h9M7.5 21h9m-9-3h9m-9-3h9"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: "33k",
      text: "Monthly Product Sale",
      red: true,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="9" stroke="black" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
        </svg>
      ),
    },
    {
      id: 3,
      number: "45.5k",
      text: "Customers active on our site",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 11h14l-1.5 9h-11L5 11z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: "25k",
      text: "Annual gross sale on our site",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 6v6m-3-3h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className={`h-64 w-full border rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ${
            stat.red ? "bg-red-500 text-white" : "bg-white"
          }`}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${
              stat.red ? "bg-red-400" : "bg-gray-200"
            }`}
          >
            {stat.icon}
          </div>
          <h2 className="text-3xl font-bold mb-2">{stat.number}</h2>
          <p className={`text-base ${stat.red ? "text-white" : "text-gray-600"}`}>
            {stat.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsUI;
