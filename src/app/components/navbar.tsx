"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 py-2">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Dhrosubi Logo.png" width={150} height={50} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-black font-bold uppercase">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/products" className="hover:text-gray-600">Products</Link>
        </div>

        {/* Call Now Button */}
        <div className="hidden md:block">
          <button className="uppercase font-bold text-lg w-40 h-10 rounded-lg border-2 border-b-4 border-l-4 border-black bg-light-green text-black">
            Call Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-0 w-full max-w-[70%] h-[100vh] md:hidden bg-white border-r-2 border-black">
          <div className="inter flex flex-col justify-start items-start pl-5 py-4 text-xl space-y-4 text-black font-bold uppercase">
            <Link href="/" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/products" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Products</Link>
            <button className="hidden uppercase font-bold text-lg w-40 h-10 rounded-lg border-2 border-b-4 border-l-4 border-black bg-light-green text-black">
              Call Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
