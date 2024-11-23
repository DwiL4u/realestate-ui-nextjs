import React from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed transform ${navOpen} transition-all duration-500 inset-0 bg-black opacity-70 w-full z-[1000] h-screen`}
        onClick={closeNav}
      ></div>
      {/* nav links */}
      <div
        className={`text-white transform ${navOpen} transition-all duration-500 delay-200 fixed flex justify-center items-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className=" border-b-[1.5px] text-[20px] pb-1 w-fit border-white sm:text[30px] font-medium hover:text-[#f7f7f7] hover:border-[#f7f7f7] transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}
        {/* close button */}
        <CgClose
          className="text-white w-6 h-6 sm:w-8 sm:h-8 absolute top-[0.7rem] right-[1.4rem] cursor-pointer"
          onClick={closeNav}
          aria-label="Close Navigation"
        />
      </div>
    </div>
  );
};

export default MobileNav;
