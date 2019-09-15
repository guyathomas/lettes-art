import React, { useState } from 'react'

import hero from 'images/hero.png';

import './Header.css'

export const Header = React.forwardRef((props, ref) => {
  return (
    <header className="header-container">
        <div className="header-contents">
          <h1 ref={ref}>Lettes Art</h1>
          <img src={hero} />
        </div>
    </header>
  )
});
