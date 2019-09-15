/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useRef } from 'react'
import { Helmet } from "react-helmet"

import zenscroll from 'zenscroll'
import throttle from 'lodash/throttle'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './Layout.css'

export const Layout = ({ children = null }) => {
  const headerEl = useRef(null);
  const mainEl = useRef(null);
  let previousScrollY = 0;
  
  const scrollToMain = () => zenscroll.to(mainEl.current)

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    // Set VH CSS variable so that 100vh will take mobile nav bars into consideration
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

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

    zenscroll.setup(null, 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
        <title>Lettes Art</title>
      </Helmet>
      <Header ref={headerEl} onChevronClick={ scrollToMain } />
      <main ref={mainEl} className="main-container">{children}</main>
      <Footer />
    </>
  )
}
