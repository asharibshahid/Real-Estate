"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
const Navbar = () => {
  const navbarRef = useRef<HTMLUListElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure navbarRef.current is not null before animating
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current.children,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">Demo-RealEstate</div>

        {/* Desktop Navigation Links */}
        <ul
          ref={navbarRef}
          className="hidden md:flex gap-6 text-lg font-medium tracking-wide"
        >
            <Link href="/">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Home
          </li>
          </Link>
    <Link  href="/properties">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Properties
          </li>
          </Link>
          <Link href="/rentals">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Rentals
          </li>
          </Link>
          <Link href="/contactUs">
          <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
            Contact Us
          </li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Sign Up Button (Desktop) */}
        <button className="hidden md:inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign Up
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg font-medium tracking-wide">
            <Link href="/">
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
              Home
            </li>
            </Link>
            <Link href="/properties">
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
              Properties
            </li>
            </Link>
            <Link href="/rentals">
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
              Rentals
            </li>
            </Link>
            <Link href="/contactUs">
            <li className="hover:text-gray-400 transition duration-300 cursor-pointer">
              Contact Us
            </li>
            </Link>
          </ul>
          <button className="mt-4 w-full inline-flex items-center justify-center bg-emerald-400 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
            Sign Up
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;