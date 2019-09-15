/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from 'react'
import throttle from 'lodash/throttle'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './Layout.css'

export const Layout = ({ children = null }) => {
  const [scrollHeight, setScrollHeight] = useState(0)
  let distanceToActivateSmallHeader;

  useEffect(() => {
    const onScroll = throttle(() => {
      setScrollHeight(window.scrollY)
    }, 100)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!distanceToActivateSmallHeader){
    const headerEl = document.querySelector('header h1') || {}
    distanceToActivateSmallHeader = headerEl.offsetTop || ( headerEl.getBoundingRect && headerEl.getBoundingRect().top ) || 48;
  }

  return (
    <>
      <Header useSmallHeader={scrollHeight >= distanceToActivateSmallHeader} />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}
