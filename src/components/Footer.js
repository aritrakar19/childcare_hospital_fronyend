import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1E76A0] text-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Left Section - Company Info */}
          <div className="max-w-sm">
            <h2 className="text-3xl font-bold ml-6">KiddieCare</h2>
            <p className="mt-2 text-gray-200 ml-6">
              The world's most trusted Child Care hospital
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-200">
            <div>
              <h3 className="font-bold text-lg text-white ml-6">Departments</h3>
              <ul className="mt-2 space-y-1 ml-6">
                <li>Eye care</li>
                <li>Cardiac care</li>
                <li>Heart care</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-white ml-6">Membership</h3>
              <ul className="mt-2 space-y-1 ml-6">
                <li>Free trial</li>
                <li>Silver</li>
                <li>Premium</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-white ml-6">Customer Care</h3>
              <ul className="mt-2 space-y-1 ml-6">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Get Update</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Full-width Bottom Bar (Removed mt-8 to remove gap) */}
      <div className="bg-[#192B63] w-full py-6 px-4 text-center text-gray-300 text-sm">
        <p>
          All rights Reserved © Novanectar, 2025 Made with{" "}
          <span className="text-red-500">❤️</span> 
          by{" "}
          <a href="#" className="text-blue-400 font-bold">
            KiddieCare
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
