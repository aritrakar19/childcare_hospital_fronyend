"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const AboutDetails = () => {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:py-20 sm:px-8">
       <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 bg-[#174A7D] text-white p-3 rounded-full hover:bg-blue-800 transition shadow-md"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <div className="text-center mb-12 top-8">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#174A7D]"
          style={{ textShadow: "6px 5px 6px lightgrey", marginTop: "20px" }}
        >
          About Our Child Care Hospital
        </h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#174A7D] leading-tight px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
            Providing Exceptional Pediatric Care
          </h2>
          <p className="text-base sm:text-lg text-[#174A7D] px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
            Our child care hospital is dedicated to providing world-class
            pediatric care. With a team of expert doctors, nurses, and
            specialists, we ensure that your child receives the best treatment
            in a caring and comforting environment.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="rounded-lg overflow-hidden border-4 border-[#B0DEEF] shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVOXEu1cYegzv2whlFOgJjBWNBVqHCYqJ7kuME0WiOn3YovrWICvo1tPgGuajFO24lbI&usqp=CAU"
                alt="Child Care Hospital"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-lg overflow-hidden border-4 border-[#B0DEEF] shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCTrS7LIC04SHeKtUxvWnl9oBtdNP6yRcD24IBwMjpLHgdQRDNFumpHtj8LzQqotXNLY&usqp=CAU"
                  alt="Child Care Services"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#174A7D] leading-tight px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-[#174A7D] px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
              Our mission is to ensure every child gets the best medical care
              with love and compassion. We focus on early diagnosis, advanced
              treatments, and emotional support for both children and their
              families.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#174A7D]">
          Why Choose Our Hospital?
        </h2>
        <div className="container mx-auto mt-8 grid md:grid-cols-3 gap-6 px-4 sm:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">Expert Pediatricians</h3>
            <p className="text-[#174A7D] mt-2">
              Our team consists of highly skilled doctors specializing in child healthcare.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">24/7 Emergency Care</h3>
            <p className="text-[#174A7D] mt-2">
              We provide round-the-clock emergency services for immediate assistance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">Child-Friendly Environment</h3>
            <p className="text-[#174A7D] mt-2">
              Our hospital is designed to be comforting and child-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
