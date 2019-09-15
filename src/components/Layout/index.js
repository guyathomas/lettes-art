/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState, useRef } from 'react'
import throttle from 'lodash/throttle'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './Layout.css'

export const Layout = ({ children = null }) => {
  const headerEl = useRef(null);
  const mainEl = useRef(null);
  let previousScrollY = 0;

  const scrollToMain = () => window.scrollTo({ top: mainEl.current.offsetTop, left: 0, behavior: 'smooth' })

  useEffect(() => {
    const onScroll = () => {
      const headerThreshold = headerEl.current.offsetTop;
      const mainThreshold = mainEl.current.offsetTop - 50;

      if ( 
        window.scrollY > previousScrollY && // Scrolling down
        previousScrollY <= headerThreshold && // Was above the header
        window.scrollY > headerThreshold // And now below the header
      ) { 
        scrollToMain();
      } else if (
        window.scrollY < previousScrollY && // Scrolling up
        previousScrollY >= mainThreshold && // Was below the main
        window.scrollY < mainThreshold // And now above the main
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      previousScrollY = window.scrollY;
    }

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
