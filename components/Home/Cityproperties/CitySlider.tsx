"use client";

import { cities } from "@/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CityCard from "./CityCard";

type City = {
  id: number;
  image: string;
  cityName: string;
  numberOfProperties: number;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CitySlider = () => {
  return (
    <Carousel
      arrows={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={6000}
      infinite
    >
      {cities.map((city: City) => {
        return (
          <div key={city.id}>
                    <CityCard city={city} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CitySlider;
