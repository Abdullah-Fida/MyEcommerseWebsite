import { electronicsProducts, exploreProducts, womenFashionProducts } from './Allcatagory';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function ExploreProduct() {
  const [previous, setPrevious] = useState(0);
  const [farword, setFarword] = useState(4);
  const length = exploreProducts.length;
  const { addToCart, removeFromCart, addToWishlist, removeFromWishlist, wishlist, cart } = useCart(); 
  const navigate = useNavigate();

  const currentItems = exploreProducts.slice(previous, farword);

  // Check if product is in cart
  const isInCart = (product) => cart.some(item => item.title === product.title);

  return (
    <div className="px-16 py-10">
      {/* Header */}
      <div className="flex gap-1.5 items-center">
        <svg width="24px" height="35px" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#E11D48" />
        </svg>
        <h1 className="text-red-600">This Month</h1>
      </div>

      <h1 className="text-4xl font-bold m-2">Explore Products</h1>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={() => {
            if (previous > 0) {
              setPrevious(prev => prev - 4);
              setFarword(prev => prev - 4);
            }
          }}
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            if (farword < length) {
              setPrevious(prev => prev + 4);
              setFarword(prev => prev + 4);
            }
          }}
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {currentItems.map((value, index) => {
          const inCart = isInCart(value);

          return (
            <div
              key={index}
              className="relative rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const isInWishlist = wishlist.some(item => item.title === value.title);
                  if (isInWishlist) removeFromWishlist(value.title);
                  else addToWishlist(value);
                }}
                className="absolute top-5 right-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 z-10"
              >
                {wishlist.some(item => item.title === value.title) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="red" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                      4.5 2.09C13.09 3.81 14.76 3 16.5 
                      3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                      6.86-8.55 11.18L12 21z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                      4.5 2.09C13.09 3.81 14.76 3 16.5 
                      3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                      6.86-8.55 11.18L12 21z" />
                  </svg>
                )}
              </button>

              {/* Product Image */}
              <div className="w-full h-52 rounded-md overflow-hidden mb-3 relative">
                <img src={value.images.image1} alt={value.title} className="w-full h-full object-cover" />
                {inCart && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-bold z-10">
                    Added
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h2 className="font-semibold text-gray-800">{value.title}</h2>
              <p className="text-purple-600 font-bold">${value.price}</p>

              {/* Add to Cart / Remove Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (inCart) removeFromCart(value.title);
                  else addToCart(value);
                }}
                className={`mt-2 w-full py-2 rounded-md 
                  ${inCart ? "bg-red-600 text-white hover:bg-red-700" : "bg-purple-600 text-white hover:bg-purple-700"}`}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 my-8 border-gray-200 mt-6"></div>
    </div>
  );
}

export default ExploreProduct;
