import React from 'react'

import hero from 'images/hero.png';

import './Header.css'

export const Header = () => (
  <header className='header-container'>
      <h1>Lettes Art</h1>
      <img src={hero} />
  </header>
)