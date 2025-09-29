import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-sm fixed top-0 z-50 w-full border-b border-red-900/20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a className="text-3xl font-bold hero-title text-red-600">ARMOR FIT</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-red-600">About</a></li>
          <li><a href="#services" className="hover:text-red-600">Services</a></li>
          <li><a href="#trainers" className="hover:text-red-600">Trainers</a></li>
          <li><a href="#testimonials" className="hover:text-red-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-900/20">
          <ul className="flex flex-col space-y-4 p-4 text-center">
            <li><a href="#about" className="hover:text-red-600" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#trainers" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Trainers</a></li>
            <li><a href="#testimonials" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
