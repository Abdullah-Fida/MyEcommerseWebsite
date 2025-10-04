import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

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
    <header className="w-full font-sans relative">
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
      <nav className="flex justify-between items-center px-4 lg:px-8 py-4 border-b relative">
        {/* Logo */}
        <div className="text-xl font-bold">Exclusive</div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8">
          <li><NavLink to="/" className="hover:text-purple-600">Home</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-purple-600">Contact</NavLink></li>
          <li><NavLink to="/about" className="hover:text-purple-600">About</NavLink></li>
          <li><NavLink to="/signup" className="hover:text-purple-600">Sign Up</NavLink></li>
        </ul>

        {/* Desktop Search + Wishlist + Cart */}
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
                  d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                    2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                    4.5 2.09C13.09 3.81 14.76 3 16.5 
                    3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                    6.86-8.55 11.18L12 21z"
                />
              </svg>
            )}
          </NavLink>

          <button onClick={() => navigate("/cart")} className="text-2xl">🛒</button>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-bold text-lg">Menu</div>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul className="flex flex-col p-4 gap-4">
          <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/signup">Sign Up</NavLink></li>
        </ul>

        {/* Mobile Search */}
        <div className="p-4 border-t">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className="border rounded-lg pl-3 pr-10 py-2 text-sm w-full focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Wishlist + Cart */}
        <div className="flex justify-around items-center p-4 border-t">
          <NavLink onClick={() => setMenuOpen(false)} to="/wishlist">❤️ Wishlist</NavLink>
          <button onClick={() => { setMenuOpen(false); navigate("/cart"); }}>🛒 Cart</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
