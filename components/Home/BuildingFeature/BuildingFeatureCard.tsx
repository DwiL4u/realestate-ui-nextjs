'use client';

import React from 'react'
import { buildings } from '@/data/data';
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  }
};


const BuildingFeatureCard = ({building}: Props) => {
  return (
    <Tilt className='rounded-lg p-4 bg-white shadow-md'>
              <div className='w-16 h-16 ml-auto flex items-center justify-center flex-col rounded-full bg-gray-100'>
                    <Image src={building.image} alt={building.title} width={45} height={45} />
              </div>
              <div className='p-2'>
                    <p className='mt-6 text-xl font-bold text-red-500'>0{building.id}</p>
                    <p className='text-gray-700 font-bold mt-2 mb-2'>{building.title}</p>
                    <p className='text-gray-700 text-sm opacity-60'>{building.description}</p>
              </div>
    </Tilt>
  )
}

export default BuildingFeatureCard
