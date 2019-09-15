import React from 'react'

import hero from 'images/hero.png'
import downChevron from 'svg/down-chevron.svg'

import './Header.css'

export const Header = React.forwardRef(({ onChevronClick }, ref) => {
  return (
    <header className="header-sizing-container">
      <div
        className="header-contents"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="header-wrapper">
          <h1 ref={ref}>Lettes Art</h1>
        </div>
        <button className="next-section-button" onClick={onChevronClick}>
          <img src={downChevron} />
        </button>
      </div>
    </header>
  )
})
