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

  useEffect(() => {
    const onScroll = () => {
      if ( 
        window.scrollY > previousScrollY && // Scrolling down
        previousScrollY <= headerEl.current.offsetTop && // Was above the header
        window.scrollY > headerEl.current.offsetTop // And now below the header
      ) { 
        window.scrollTo({ top: mainEl.current.offsetTop, left: 0, behavior: 'smooth' })
      } else if (
        window.scrollY < previousScrollY && // Scrolling up
        previousScrollY >= mainEl.current.offsetTop && // Was below the main
        window.scrollY < mainEl.current.offsetTop // And now above the main
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
      <Header ref={headerEl} />
      <main ref={mainEl} className="main-container">{children}</main>
      <Footer />
    </>
  )
}
