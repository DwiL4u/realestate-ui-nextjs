'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navLinks } from "@/constant/constant"

interface NavProps {
      openNav: () => void;
}

const Nav = ({openNav} : NavProps) => {
      const [navBg, setNavBg] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY >= 90) setNavBg(true);
                  if (window.scrollY < 90) setNavBg(false);
            }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);

      }, []);

  return (
        <div className={`fixed ${navBg ? 'bg-gray-800' : ''} h-[10vh] w-full z-[100] transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <Link href="/" className="flex space-x-2 items-center cursor-pointer">
          <div className="md:w-[10] md:h-[10] w-7 h-7 bg-rose-700 text-white flex items-center justify-center flex-col rounded-full">
            <FaHouse />
          </div>
          <h1 className="text-white text-sm sm:text-base md:text-xl font-bold">
            HomeLand
          </h1>
        </Link>
        {/* nav links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white text-sm sm:text-base md:text-lg font-small hover:scale-105 transform transition-transform  duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* login and burger menu */}
        <div className="flex items-center space-x-4">
          {/* login button */}
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:scale-105 transform transition-transform duration-300">
            <FaUserCircle className="w-5 h-5" />
            <p className="text-xs sm:text-base font-semibold">
              Login / Register
            </p>
          </div>
          {/* burger menu */}
          <div className="md:hidden cursor-pointer">
            <HiBars3BottomRight className="text-white w-6 h-6 sm:w-8 sm:h-8 cursor-pointer" onClick={openNav}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
