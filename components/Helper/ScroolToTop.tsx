'use client'

import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScroolToTop = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
      const scrollToTop = () => { 
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });
      }
  return (
    <div className='fixed animate-pulse bottom-4 right-2'>
              {isVisible && (
                    <button onClick={scrollToTop} className='bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none'>
                          <FaArrowUp />
                    </button>
                  )
            }
    </div>
  )
}

export default ScroolToTop
