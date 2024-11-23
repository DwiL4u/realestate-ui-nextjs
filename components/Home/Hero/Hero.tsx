import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url(/images/hero.png)] bg-cover bg-center">
      {/* black overlay */}
      <div className="absolute bg-black opacity-70 inset-0"></div>
      {/* content */}
      <div className="flex justify-center items-center relative flex-col h-full mx-auto w-[95%] sm:h-[80%] z-10">
        <h1
          data-aos="fade-left"
          className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium"
        >
          The Best Way To
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4"
        >
          Find Your Dream Home
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-center text-sm sm:text-base text-gray-200"
        >
          We have more than 745,000 apartements place & plot.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          className="w-full  mt-8 px-4 sm:px-0"
        >
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default Hero
