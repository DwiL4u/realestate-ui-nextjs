import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import PropertyCard from './PropertyCard'
import { properties } from '@/data/data'

const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
              <div className='w-[80%] mx-auto'>
                    <SectionHeading heading='Discover Our Properties' />
                    <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
                          {properties.map((property: any, i) => {
                                return (
                                  <div
                                    key={property.id}
                                    data-aos="fade-left"
                                    data-aos-delay={`{i * 150}`}
                                    data-anchor-placement="top-center"
                                  >
                                    <PropertyCard property={property} />
                                  </div>
                                );
                                
                          })}
                    </div>
      </div>
    </div>
  )
}

export default Properties
