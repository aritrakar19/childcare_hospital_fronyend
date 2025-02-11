import React from "react";
import { FaBrain, FaEye, FaHeart, FaLungs } from "react-icons/fa";
import { GiJoint, GiHumanEar } from "react-icons/gi";
import Link from "next/link";

const Departments = () => {
  return (
    <>
      <section id="departments" className="py-16 bg-white text-center relative">
        <h2
          className="relative text-3xl lg:text-4xl font-bold text-[#174A7D] uppercase mb-12 z-10"
          style={{ textShadow: "6px 5px 6px lightgrey" }}
        >
          OUR DEPARTMENTS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto z-10 relative">
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <FaBrain
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              Neurology
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <FaEye
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              Eye care
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <FaLungs
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              Cardiac care
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <FaHeart
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              Heart care
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <GiJoint
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              Osteoporosis
            </p>
          </div>
          <div className="flex flex-col items-center hover:text-[#174A7D] transition-all duration-300">
            <GiHumanEar
              size={50}
              className="text-gray-500 transition-all duration-300 hover:text-[#174A7D] hover:scale-110"
            />
            <p className="mt-2 text-gray-500 text-sm transition-all duration-300 hover:text-[#174A7D]">
              ENT
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1C6BA4] text-white py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[#A6C9E5] rounded-xl"></div>
          <img
            src="https://www.shutterstock.com/image-photo/medicine-development-laboratory-asian-female-600nw-2456036585.jpg"
            alt="Doctor at work"
            className="relative w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Eye Care with Top Professionals <br /> and In Budget.
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Our child care eye treatment focuses on early detection, prevention,
            and personalized care for vision problems, ensuring your child's
            healthy eyesight and bright future.{" "}
          </p>
        </div>

        <div className="absolute top-10 left-5 lg:left-16 grid grid-cols-4 gap-2 opacity-40">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white rounded-full opacity-30"
            ></div>
          ))}
        </div>
        <div className="absolute bottom-10 right-5 lg:right-16 grid grid-cols-4 gap-2 opacity-40">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white rounded-full opacity-30"
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Departments;
