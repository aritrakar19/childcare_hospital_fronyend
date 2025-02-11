"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState(""); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && validateEmail(email)) {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <section id="contact" className="bg-[#1E3476] text-white py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between space-y-8 sm:space-y-0">
        <div className="text-center sm:text-left max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold">Get an update</h2>
          <p className="mt-2 text-gray-300">
            The world's most trusted Child Care hospital to improve the patient experience. Providing world-class tests, and a wide range of other services.
          </p>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
          <label className="text-gray-400 uppercase text-sm font-bold text-center sm:text-left">
            Subscribe to Newsletter
          </label>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="px-4 py-3 w-full sm:w-72 bg-transparent text-white placeholder-gray-400 border border-gray-400 rounded-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-200 text-gray-800 font-bold px-6 py-3 w-full sm:w-auto rounded-full"
            >
              Subscribe
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-green-400">Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
