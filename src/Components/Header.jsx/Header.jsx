import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header({ onSearch }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); // send search text to parent
  };

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-center items-center px-4 py-2 text-sm relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="/shop" className="font-bold underline ml-1">
            ShopNow
          </a>
        </p>
        <div className="cursor-pointer absolute right-4">English ▼</div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 lg:px-8 py-4 border-b">
        {/* Logo */}
        <div className="text-xl font-bold">Exclusive</div>

        {/* Links */}
        <ul className="hidden lg:flex gap-8">
          <li><a href="/" className="hover:text-purple-600">Home</a></li>
          <li><a href="/contact" className="hover:text-purple-600">Contact</a></li>
          <li><a href="/about" className="hover:text-purple-600">About</a></li>
          <li><a href="/signup" className="hover:text-purple-600">Sign Up</a></li>
        </ul>

        {/* Search */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={search}
              onChange={handleSearch}
              className="border rounded-lg pl-3 pr-10 py-2 text-sm w-64 focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">🔍</button>
          </div>

          {/* Wishlist */}
          <NavLink to="/wishlist">
            {({ isActive }) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={isActive ? "red" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke={isActive ? "red" : "currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21l-1.45-1.32C5.4 15.36 
                    2 12.28 2 8.5 2 5.42 4.42 3 
                    7.5 3c1.74 0 3.41.81 4.5 
                    2.09C13.09 3.81 14.76 3 
                    16.5 3 19.58 3 22 5.42 
                    22 8.5c0 3.78-3.4 6.86-8.55 
                    11.18L12 21z"
                />
              </svg>
            )}
          </NavLink>

          {/* Cart */}
          <button onClick={() => navigate("/cart")} className="text-2xl">🛒</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
