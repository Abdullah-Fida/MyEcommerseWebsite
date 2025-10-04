// ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";

function ProductCard({ value, wishlist, addToWishlist, removeFromWishlist, navigate }) {
  const isInWishlist = wishlist.some((item) => item.title === value.title);

  return (
    <motion.div
      onClick={() => navigate("/products", { state: value })}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg p-4 py-0 shadow-md hover:shadow-xl bg-white transition cursor-pointer"
    >
      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (isInWishlist) {
            removeFromWishlist(value.title);
          } else {
            addToWishlist(value);
          }
        }}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isInWishlist ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke={isInWishlist ? "red" : "currentColor"}
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
             4.5 2.09C13.09 3.81 14.76 3 16.5 
             3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.18L12 21z"
          />
        </svg>
      </button>

      {/* Product Image */}
      <motion.img
        src={value.images.image1}
        alt={value.title}
        className="w-full h-[220px] object-cover rounded-md mb-3"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Product Info */}
      <h2 className="font-semibold text-gray-800">{value.title}</h2>
      <p className="text-purple-600 font-bold">${value.price}</p>
      <button className="mt-2 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
        Add to Cart
      </button>
    </motion.div>
  );
}

export default ProductCard;
