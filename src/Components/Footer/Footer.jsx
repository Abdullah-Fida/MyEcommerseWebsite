function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 lg:px-20 py-12 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop shop for quality products with great deals. Shop
            smart, shop Exclusive.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/signup" className="hover:text-white">Sign Up</a></li>
          </ul>
        </div>

        {/* Column 3 - Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/returns" className="hover:text-white">Returns</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
            <li><a href="/support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-black bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-5 text-gray-400 text-lg">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">▶️</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Exclusive. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
