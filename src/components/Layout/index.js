/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import './Layout.css'

export const Layout = ({ children = null }) => {

  return (
    <>
      <Header />
      <main className="main-container">
          {children}
        <Footer />
      </main>
    </>
  )
}
