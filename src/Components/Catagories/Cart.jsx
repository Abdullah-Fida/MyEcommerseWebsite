import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="px-6 sm:px-16 py-10 font-sans bg-gray-50 min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Cart 🛒
      </motion.h1>

      {cart.length === 0 ? (
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your cart is empty!  
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cart.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition"
                >
                  {/* Image + details */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={item.images.image1}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                    <div>
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-purple-600 font-bold">${item.price}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {/* Quantity (future: make dynamic) */}
                    <div className="flex items-center border rounded-md">
                      <button className="px-2 py-1 text-lg hover:bg-gray-200">
                        -
                      </button>
                      <span className="px-3">1</span>
                      <button className="px-2 py-1 text-lg hover:bg-gray-200">
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <motion.button
                      onClick={() => removeFromCart(item.title)}
                      className="text-red-500 font-semibold hover:text-red-700"
                      whileTap={{ scale: 0.9 }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary Section */}
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 h-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total Price</span>
              <span className="font-bold text-purple-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <motion.button
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Checkout
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;
