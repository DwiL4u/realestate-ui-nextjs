'use client'
import React, {useState} from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
      const [shownav, setShownav] = useState(false);
      const openNavHandler = () => setShownav(true);
      const closeNavHandler = () => setShownav(false);
  return (
    <div>
              <Nav openNav={openNavHandler} />
              <MobileNav showNav={shownav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav
