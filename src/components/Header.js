import React from 'react'

import './Header.css'

const Header = ({ fullHeader = true }) => (
  <header className={`header-container ${fullHeader ? '' : 'small'}`}>
    <div className="header-titles">
      <h1>Lettes Art</h1>
    </div>
  </header>
)

export default Header
