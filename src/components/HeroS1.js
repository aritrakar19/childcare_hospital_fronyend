import Link from "next/link";
import React from "react";

function HeroS1() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#B0DEEF] py-12 mt-8 lg:mt-0"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left">
          <h2 className="text-4xl font-light lg:px-20">
          <strong>We're</strong>  <span className="font-bold text-[#174A7D]">here</span>{" "}
            <strong>for every </strong><span className="font-bold text-[#174A7D]">little smile.</span>{" "} 
            
          </h2>
          <p className="mt-4 text-lg text-[#174A7D] lg:px-20">
          You have access to care 24/7 – whether online or in person, and you'll be attended to by compassionate specialist doctors.
          </p>
          <p className="mt-4 text-lg text-[#174A7D] lg:px-20">
          At our childcare hospital, compassionate professionals provide expert pediatric care in a supportive, family-centered environment.</p>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:px-12 relative">
          <div className="rounded-full overflow-hidden border-8 border-white shadow-lg">
            <img
              src="https://apexgroupofhospitals.com/wp-content/uploads/child_care_plus.jpg"
              alt="Happy family"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-blue-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white -skew-y-6 transform translate-y-12"></div>
    </section>
  );
}

export default HeroS1;
