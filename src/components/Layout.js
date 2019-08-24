/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useCallback, useState, createContext } from 'react'
import throttle from 'lodash/throttle'

import Header from './Header'
import Footer from './Footer'
import './Layout.css'
import { SHRINK_THRESHOLD } from '../constants'

export const LayoutContext = createContext({})

const Layout = ({ children = null }) => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [aboveShrinkThreshold, setAboveShrinkThreshold] = useState(true)

  // useCallback to maintain reference to the same throttled function for removing its listener
  const onScroll = useCallback(
    throttle(() => {
      const aboveShrinkThreshold = window.scrollY <= SHRINK_THRESHOLD
      setAboveShrinkThreshold(aboveShrinkThreshold)
    }, 100),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const headerEl = document.querySelector('header') || {}
    const calculatedHeaderHeight =
      headerEl.clientHeight || headerEl.offsetHeight
    setHeaderHeight(calculatedHeaderHeight)
  }, [])

  return (
    <>
      <Header fullHeader={aboveShrinkThreshold} />
      <main className="main-container" style={{ top: headerHeight }}>
        <LayoutContext.Provider value={{ aboveShrinkThreshold }}>
          {children}
        </LayoutContext.Provider>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
