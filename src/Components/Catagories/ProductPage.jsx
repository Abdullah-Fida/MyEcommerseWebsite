import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductPage() {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  // Convert object of images into array
  const imageArray = Object.values(product.images || {});
  const [selectedImage, setSelectedImage] = useState(imageArray[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-md p-8">
        
        {/* LEFT SIDE - Thumbnails + Main Image */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {imageArray.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-red-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full max-h-[450px] object-contain rounded-lg border"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Product Info */}
        <div className="flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-2">
            Account / Fashion / {product.title}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>

          {/* Reviews + Stock */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <p className="text-gray-500">(150 Reviews)</p>
            <p className="text-green-600 font-medium">In Stock</p>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold text-red-600 mb-4">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Colors */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Colours:</h2>
            <div className="flex gap-3">
              {product.colors?.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-red-600" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Size:</h2>
            <div className="flex gap-3">
              {product.sizes?.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buy */}
          <div className="flex items-center gap-4 mb-6">
            {/* Quantity */}
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-lg font-bold"
              >
                -
              </button>
              <span className="px-6 py-2 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-lg font-bold"
              >
                +
              </button>
            </div>

            {/* Buy Now */}
            <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
              Buy Now
            </button>

            {/* Wishlist */}
            <button className="p-3 border rounded-lg hover:bg-gray-100">
              ❤️
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border-t pt-4 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">↩️</span>
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
