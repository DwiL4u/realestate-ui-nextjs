import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#fef7f6]'>
              <div className='w-[80%] mx-auto'>
                    <SectionHeading heading='What Our Clients Say' />
                    <div className='mt-14'>
                          <ReviewSlider />
                    </div>
      </div>
    </div>
  )
}

export default Reviews
