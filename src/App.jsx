import { useState } from "react";
import Header from "./Components/Header.jsx/Header";
import Footer from "./Components/Footer/Footer";
import Homw from "./Components/Home/Homw";
import ProductPage from "./Components/Catagories/ProductPage";
import { Routes, Route } from "react-router-dom";
import Whislist from "./Components/Catagories/Whislist";
import Contact from "./Components/Catagories/Contact";
import About from "./Components/Catagories/About";
import SignUp from "./Components/Signin/SignUp";
import Login from "./Components/Login/Login";
import Cart from "./Components/Catagories/Cart";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Homw searchQuery={searchQuery} />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<Whislist />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
