"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:py-20 sm:px-8"
    >
      <div className="text-center mb-8 sm:mb-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#174A7D]"
          style={{ textShadow: "6px 5px 6px lightgrey" }}
        >
          About Us
        </h1>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#174A7D] leading-tight px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
            Innovating healthcare for a healthier tomorrow
          </h2>
          <p className="text-base sm:text-lg text-[#174A7D] px-4 sm:px-8 lg:px-20 py-4 sm:py-6">
            At KiddieCare, we provide expert pediatric care in a compassionate,
            family-centered environment. Our dedicated team offers every time
            support, ensuring your child receives personalized treatment and
            care for a healthier future.
          </p>
          {/* <div className="mt-8 mb-4 text-center sm:text-left lg:px-20">
            <button
              onClick={handleLearnMore}
              className="cursor-pointer inline-block border-2 border-[#174A7D] text-[#174A7D] text-lg px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Learn More
            </button>
          </div> */}
          <div className="mt-8 mb-4 text-center sm:text-left lg:px-20">
            <Link href="/about-details">
              <button className="cursor-pointer inline-block border-2 border-[#174A7D] text-[#174A7D] text-lg px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="rounded-full overflow-hidden border-4 border-[#B0DEEF] shadow-lg">
              <img
                src="https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/health-care.png"
                alt="Health Care"
                className="w-full h-auto rounded-full"
              />
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 border border-[#B0DEEF] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
