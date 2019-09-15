/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useRef } from 'react'
import zenscroll from 'zenscroll'
import throttle from 'lodash/throttle'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './Layout.css'

zenscroll.setup(null, 0)

export const Layout = ({ children = null }) => {
  const headerEl = useRef(null);
  const mainEl = useRef(null);
  let previousScrollY = 0;

  const scrollToMain = () => zenscroll.to(mainEl.current)

  useEffect(() => {
    const onScroll = throttle(() => {

      const headerThreshold = zenscroll.getTopOf(headerEl.current);
      const mainThreshold = zenscroll.getTopOf(mainEl.current) - 50;
      const scrollPosition = zenscroll.getY();
      
      if ( 
        scrollPosition > previousScrollY && // Scrolling down
        previousScrollY <= headerThreshold && // Was above the header
        scrollPosition > headerThreshold // And now below the header
      ) { 
        scrollToMain();
      } else if (
        scrollPosition < previousScrollY && // Scrolling up
        previousScrollY >= mainThreshold && // Was below the main
        scrollPosition < mainThreshold // And now above the main
        ) {
        zenscroll.toY(0)
      }
      previousScrollY = window.scrollY;
    }, 100)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header ref={headerEl} onChevronClick={ scrollToMain } />
      <main ref={mainEl} className="main-container">{children}</main>
      <Footer />
    </>
  )
}
