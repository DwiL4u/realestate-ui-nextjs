import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import ApartementTypeCard from "./ApartementTypeCard";
import { apartmentTypeData } from "@/data/data";

const ApartementType = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Explore Apartement Type" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center mt-10 md:mt-20">
          {apartmentTypeData.map((type: any, i) => {
           
            return (
              <div
                key={type.id}
                data-aos="zoom-in"
                data-aos-delay={`{i * 150}`}
                data-anchor-placement="top-center"
              >
                <ApartementTypeCard type={type} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ApartementType;
