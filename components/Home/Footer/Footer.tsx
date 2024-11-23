import React from "react";
import {
  FaFacebook,
  FaHouse,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
       const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black pt-20 pb-12">
      <div className="grid items-start grid-cols-1 lg:grid-cols-4 border-b-[1.5px] border-white border-opacity-20 gap-12 pb-8 md:grid-cols-2 w-[80%] mx-auto ">
        <div>
          <Link href="/" className="flex space-x-2 items-center cursor-pointer">
            <div className="md:w-[10] md:h-[10] w-7 h-7 bg-rose-700 text-white flex items-center justify-center flex-col rounded-full">
              <FaHouse />
            </div>
            <h1 className="text-white text-sm sm:text-base md:text-xl font-bold">
              HomeLand
            </h1>
          </Link>
          <p className="text-gray-300 mt-6">
            Empowering your real estate journey with expert guidance.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-3 font-semibold">+053 1234 5678</p>
          {/* social link */}
          <div className="flex items-center mt-6 space-x-4 cursor-pointer">
            <FaFacebook className="text-blue-600 w-6 h-6" />
            <FaXTwitter className="text-white w-6 h-6" />
            <FaInstagram className="text-[#f50057] w-6 h-6" />
            <FaYoutube className="text-red-600 w-6 h-6" />
          </div>
        </div>
        {/* second part */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Poplular Search</h1>
          <p className="footer__link">Apartement for Rent</p>
          <p className="footer__link">Apartmen Low to High</p>
          <p className="footer__link">Offices to Buy</p>
          <p className="footer__link">Offices for Rent</p>
        </div>
        {/* third part */}
        <div className="lg:mx-auto">
          <h1 className="footer__heading">Quick Link</h1>
          <p className="footer__link">Term of Use</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Pricing Plan</p>
          <p className="footer__link">Our services</p>
          <p className="footer__link">Contact Support</p>
          <p className="footer__link">FAQs</p>
        </div>
        {/* fourth part */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Discover</h1>
          <p className="footer__link">Miami</p>
          <p className="footer__link">Los Angeles</p>
          <p className="footer__link">Chicago</p>
          <p className="footer__link">New York</p>
          <p className="footer__link">Florida</p>
          <p className="footer__link">Washington</p>
        </div>
      </div>
      <p className="text-center mt-4 md:text-base text-white opacity-70">&copy; {currentYear} HomeLand. All rights reserved.</p>
    </div>
  );
};

export default Footer;
