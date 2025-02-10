"use client";
import React, { useState } from "react";
import axios from "axios";
// Import the necessary parts from react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/appointments", formData);
      // Replace alert with toast
      toast.success(response.data.message); // Show success toast
      setFormData({ name: "", phone: "", category: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error saving appointment:", error);
      // Replace alert with toast
      toast.error("Failed to book appointment."); // Show error toast
    }
  };

  return (
    <section id="appointment" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12"> */}
      {/* Title Section */}
      <div className="text-center mb-8 relative">
        <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174A7D] uppercase mb-12 z-10"
          style={{ textShadow: "4px 3px 5px lightgrey" }}>
          Appointment
        </h3>
      </div>

      {/* Appointment Form Section */}
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-col lg:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img src="https://technext.github.io/live-doc/v1.0.0/assets/img/gallery/appointment.png" 
               alt="Dental Appointment" 
               className="w-full h-auto object-cover rounded-md" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none" required />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none" required />

            <select name="category" value={formData.category} onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none" required>
              <option value="">Select Category</option>
              <option value="Neurology">Neurology</option>
              <option value="Eye care">Eye care</option>
              <option value="Cardiac care">Cardiac care</option>
              <option value="Heart care">Heart care</option>
              <option value="Osteoporosis">Osteoporosis</option>
              <option value="ENT">ENT</option>
              <option value="Others">Others</option>
            </select>

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none" required />

            {/* Message field - Full width */}
            <div className="col-span-2">
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-none" rows="4"></textarea>
            </div>

            {/* Submit button - Full width */}
            <div className="col-span-2">
              <button type="submit"
                className="bg-[#174A7D] text-white font-bold px-6 py-3 w-full rounded-full mt-4 hover:bg-blue-800 transition">
                Take an Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Add the ToastContainer to render toast notifications */}
      <ToastContainer />
    {/* </div> */}
        </section>
  );
}

export default Appointment;
