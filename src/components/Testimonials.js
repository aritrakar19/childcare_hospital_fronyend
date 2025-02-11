"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Edward Newgate",
    role: "Founder Circle",
    image: "https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/jane.png",
    title: "Fantastic Response!",
    rating: 4,
    review: "This medical and health care facility distinguishes itself from the competition by providing technologically advanced medical and health care. Highly recommended their health care services.",
  },
  {
    name: "Sarah Thompson",
    role: "Healthcare Consultant",
    image: "https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/anita.png",
    title: "Excellent Service!",
    rating: 5,
    review: "The staff is highly professional and provides top-notch medical care. Scheduling appointments is hassle-free, and the online consultations are incredibly helpful.",
  },
  {
    name: "John Carter",
    role: "Patient",
    image: "https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/leo-mario.png",
    title: "Highly Recommended!",
    rating: 5,
    review: "The doctors and support staff here go above and beyond to ensure the best care. I had an amazing experience and will definitely be returning.",
  },
  {
    name: "Emma Roberts",
    role: "Mother & Caregiver",
    image: "https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/eye-care.png",
    title: "Compassionate Care",
    rating: 4,
    review: "As a mother, I always look for the best healthcare services for my family. This facility provides excellent care, and I feel confident in their services.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#B0DEEF] py-12 px-4 sm:px-8 relative">
      <div className="text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#174A7D]"
          style={{ textShadow: '2px 2px 4px white' }}
        >
          PEOPLE WHO LOVE US
        </h2>
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#B0DEEF] absolute top-0 left-1/2 transform -translate-x-1/2 opacity-10">
          PEOPLE WHO LOVE US
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#174A7D]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <h4 className="mt-4 text-lg sm:text-2xl font-bold text-[#174A7D]">
                {testimonial.title}
              </h4>
              <p className="mt-4 text-gray-700 text-sm sm:text-base">{testimonial.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
