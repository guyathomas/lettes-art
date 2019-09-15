import React from 'react'

import hero from 'images/hero.png';
import downChevron from 'svg/down-chevron.svg';

import './Header.css'

export const Header = React.forwardRef(({ onChevronClick }, ref) => {
  return (
    <header className="header-container">
        <div className="header-contents">
          <h1 ref={ref}>Lettes Art</h1>
          <img src={hero} />
        </div>
        <button className="next-section-button" onClick={onChevronClick}>
          <img src={downChevron} />
        </button>
    </header>
  )
});
