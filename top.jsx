import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-indigo-400">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          
          <a href="#home" className="hover:text-indigo-400 transition font-semibold">Home</a>
          <a href="#about" className="hover:text-indigo-400 transition font-semibold">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition font-semibold">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition font-semibold">Projects</a>
           <a href="#contact" className="hover:text-indigo-400 transition font-semibold">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-800 px-6 py-4 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#projects" className="block hover:text-indigo-400">Projects</a>
        <a href="#contact" className="block hover:text-indigo-400">Contact</a>
      </div>
    </nav>
  );
}
