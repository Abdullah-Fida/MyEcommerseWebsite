import React from "react";
import { useCart } from "./CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useCart();

  return (


    
    <div className="px-8 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Wishlist <span className="text-gray-500">({wishlist.length})</span>
        </h1>
        <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((value, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition p-4"
          >
            {/* Trash / Remove button */}
            <button
              onClick={() => removeFromWishlist(value.title)}
              className="absolute top-6 right-6  bg-white p-1 rounded-full shadow hover:bg-gray-100 cursor-pointer"
            >
              {/* Trash SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 
                     2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 
                     0 011-1h4a1 1 0 011 1v3m-9 0h10"
                />
              </svg>
            </button>

            {/* Product Image */}
            <img
              src={value.images?.image1 || value.images?.image}
              alt={value.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            {/* Product Info */}
            <h2 className="font-semibold text-gray-800 truncate">
              {value.title}
            </h2>

            {/* Price Section */}
            <div className="flex items-center gap-2">
              <p className="text-red-600 font-bold">${value.price}</p>
              {value.oldPrice && (
                <p className="line-through text-gray-400 text-sm">
                  ${value.oldPrice}
                </p>
              )}
            </div>

            {/* Add to Cart Buttosn */}
            <button className="mt-3 flex items-center justify-center gap-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
              {/* Cart SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 
                     5M7 13l-2 9m5-9v9m4-9v9m4-9v9"
                />
              </svg>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Wishlist;
