"use client";

import { useState, useEffect } from "react";

const EMAIL = "reemaxisakariya@gmail.com";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 navbar-blur${scrolled ? " shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm font-display">
                RS
              </span>
            </div>
            <span className="font-display font-bold text-slate-800 text-lg hidden sm:block">
              Rimaxi<span className="gradient-text"> Sakariya</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-sm font-medium text-slate-600 hover:text-blue-600"
                >
                  {item}
                </a>
              ),
            )}
            <a
              href={`mailto:${EMAIL}`}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-sky-600 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            <i
              className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-lg`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-blue-50 px-4 py-4 space-y-3"
        >
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50"
                onClick={closeMobileMenu}
              >
                {item}
              </a>
            ),
          )}
          <a
            href={`mailto:${EMAIL}`}
            className="block mt-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold rounded-xl text-center"
            onClick={closeMobileMenu}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
