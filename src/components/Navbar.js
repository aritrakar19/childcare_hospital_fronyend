"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const desktopLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Departments", href: "#departments" },
    { label: "Appointment", href: "#appointment" },
    { label: "Contact", href: "#contact" },
  ];

  const mobileLinks = [
    { label: "Home", href: "#home" },
    { label: "Departments", href: "#departments" },
    { label: "Contact", href: "#contact" },
    { label: "Appointment", href: "#appointment" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="bg-[#B0DEEF] py-4 px-8 flex justify-between items-center shadow-md md:static fixed top-0 left-0 w-full z-50">
      <div className="text-3xl font-bold text-[#174A7D]">KiddieCare</div>

      <div className="hidden md:flex space-x-8 text-[#174A7D] text-lg">
        {desktopLinks.map((item, index) => (
          <Link key={index} href={item.href} className="relative group">
            <span className="pb-1">{item.label}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#174A7D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#174A7D] focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-[#ddeef4] shadow-md z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-16 flex flex-col items-stretch">
          {mobileLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 text-[#174A7D] text-lg border-b border-gray-300 "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
