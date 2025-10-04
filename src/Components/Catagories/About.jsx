import React from "react";
import { motion } from "framer-motion";
import Aboutimg from "../../assets/About.png";
import EndImage from "../../assets/imageofhuman.png";
import Endlogos from "../../assets/imageend.png";

function About() {
  return (
    <div className="w-full px-8 py-12 font-sans bg-gray-50">

      {/* Breadcrumb */}
      <motion.div
        className="text-sm text-gray-500 mb-6"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Home / <span className="text-black">About</span>
      </motion.div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="mx-4 md:mx-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a very fast
            rate. Exclusive offers a diverse assortment in categories ranging from
            consumer.
          </p>
        </motion.div>

        {/* Image with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <img
            src={Aboutimg}
            width="500"
            alt="About"
            className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Box 1 */}
        <motion.div
          className="h-64 flex flex-col items-center justify-center rounded-lg shadow-md bg-white hover:scale-105 transition duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="text-2xl font-bold">10.5k</h3>
          <p className="text-gray-600 text-center mt-2">
            Sellers active<br />on our site
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          className="h-64 flex flex-col items-center justify-center rounded-lg shadow-md bg-red-500 text-white hover:scale-105 transition duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="text-2xl font-bold">33k</h3>
          <p className="text-center mt-2">
            Monthly<br />Product Sale
          </p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          className="h-64 flex flex-col items-center justify-center rounded-lg shadow-md bg-white hover:scale-105 transition duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="text-2xl font-bold">45.5k</h3>
          <p className="text-gray-600 text-center mt-2">
            Customers active<br />on our site
          </p>
        </motion.div>

        {/* Box 4 */}
        <motion.div
          className="h-64 flex flex-col items-center justify-center rounded-lg shadow-md bg-white hover:scale-105 transition duration-300"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="text-2xl font-bold">25k</h3>
          <p className="text-gray-600 text-center mt-2">
            Annual gross sale<br />on our site
          </p>
        </motion.div>
      </motion.div>

      {/* End Section Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EndImage}
          width="1000"
          alt="End section"
          className="mx-auto rounded-lg shadow-md"
        />
      </motion.div>

      {/* Logos Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={Endlogos} alt="End logos" className="mx-auto" />
      </motion.div>
    </div>
  );
}

export default About;
