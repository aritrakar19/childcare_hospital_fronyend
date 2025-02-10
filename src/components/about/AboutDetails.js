import React from "react";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:py-20 sm:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#174A7D]"
          style={{ textShadow: "6px 5px 6px lightgrey" }}
        >
          About Our Child Care Hospital
        </h1>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Text Content */}
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

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="rounded-lg overflow-hidden border-4 border-[#B0DEEF] shadow-lg">
              <img
                src="https://apexgroupofhospitals.com/wp-content/uploads/child_care_plus.jpg"
                alt="Child Care Hospital"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mt-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="rounded-lg overflow-hidden border-4 border-[#B0DEEF] shadow-lg">
                <img
                  src="https://www.childrenshospital.org/sites/default/files/styles/story_image_large_800x500_/public/2021-10/childrens-medical-center.jpg"
                  alt="Child Care Services"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Section: Text Content */}
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

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#174A7D]">
          Why Choose Our Hospital?
        </h2>
        <div className="container mx-auto mt-8 grid md:grid-cols-3 gap-6 px-4 sm:px-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">Expert Pediatricians</h3>
            <p className="text-[#174A7D] mt-2">
              Our team consists of highly skilled doctors specializing in child healthcare.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">24/7 Emergency Care</h3>
            <p className="text-[#174A7D] mt-2">
              We provide round-the-clock emergency services for immediate assistance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#B0DEEF]">
            <h3 className="text-xl font-semibold text-[#174A7D]">Child-Friendly Environment</h3>
            <p className="text-[#174A7D] mt-2">
              Our hospital is designed to be comforting and child-friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Link
          href="/appointments"
          className="inline-block bg-[#174A7D] text-white text-lg px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default AboutDetails;
