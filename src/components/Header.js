import React, { Component } from 'react';
import PropTypes from "prop-types"

import './Header.css';

class Header extends Component {
  static propTypes = {
    fullHeader: PropTypes.bool
  }

  static defaultProps = {
    fullHeader: true,
  }

  render() {
    const { fullHeader } = this.props;
    return (
        <header className={`header-container ${ fullHeader ? '' : 'small' }`}>
            <div className="header-titles">
                <h1>Lettes Art</h1>
            </div>
        </header>
    );
  }
}

export default Header;