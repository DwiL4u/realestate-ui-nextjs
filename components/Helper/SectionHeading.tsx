import React from 'react'

type Props = {
      heading: string
}

const SectionHeading = ({heading}:Props) => {
  return (
    <div>
      <h1 className='text-gray-700 mb-2 text-2xl sm:text-3xl font-bold'>{heading}</h1>
      <p className='text-base text-gray-500'>Find your perfect home in the heart of the city.</p>
    </div>
  );
}

export default SectionHeading
