import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

type Props = {
  property: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
};

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white rounded-lg cursor-pointer shadow-lg overflow-hidden group">
      <div className="relative">
        <Image
          src={property.imageUrl}
          alt={property.propertyName}
          width={300}
          height={300}
          className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-300"
        />
        <h1 className="rounded-lg px-6 bottom-4 left-4 py-1.5 text-sm bg-black w-fit text-white absolute">
          <span className="text-base font-bold">${property.price}</span> / month
        </h1>
        <div className="flex items-center space-x-1 absolute px-2 py-1 top-2 left-2 text-sm bg-red-600 text-white rounded-md  w-fit">
          <MdElectricBolt />
          <span>Featured</span>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mt-4 group-hover:underline text-gray-900 font-bold text-lg">
          {property.propertyName}
        </h1>
        <p className="text-sm text-gray-500 mt-3">{property.location}</p>
        <div className="flex items-center justify-between w-full mt-6 lg:w-[80%]">
          <div className="flex items-center space-x-1">
            <FaBed className="text-rose-500" />
            <p className="text-sm text-gray-600">{property.bedrooms}Beds</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaBath className="text-rose-500" />
            <p className="text-sm text-gray-600">{property.bathrooms}Bath</p>
          </div>
          <div className="flex items-center space-x-1">
            <FaSquare className="text-rose-500" />
            <p className="text-sm text-gray-600">{property.size}Sqrt</p>
          </div>
        </div>
        <div className="w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15"></div>
        <div className="flex items-center justify-between">
          <h1 className="text-xs text-gray-500">For Rent</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <BiLinkExternal />
            <BsPlusSquare />
            <BsHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
