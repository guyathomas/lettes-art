/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import { SHRINK_THRESHOLD } from "../constants";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  static defaultProps = {
    children: () => null,
  }

  constructor() {
    super()
    this.state = {
      fullHeader: true,
      scrollPosition: 0,
      headerHeight: 0,
    }
  }

  componentDidMount() {
    const headerEl = document.querySelector('header') || {};
    const headerHeight = headerEl.clientHeight || headerEl.offsetHeight;
    window.addEventListener("scroll", this.throttledScroll);
    this.setState({ headerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledScroll);
  }

  onScroll = () => {
    if (window.scrollY >= SHRINK_THRESHOLD) {
      this.setState({ fullHeader: false });
    } else if (window.scrollY <= SHRINK_THRESHOLD) {
      this.setState({ fullHeader: true });
    }

    this.setState({ scrollPosition: window.scrollY });
  };

  throttledScroll = throttle(this.onScroll, 100);

  render() {
    return (
      <>
        <Header fullHeader={ this.state.fullHeader } />
        <main className="main-container" style={{ top: this.state.headerHeight }} >
          { this.props.children( this.state ) }
        </main>
        <Footer />
      </>
    )
  }
}

export default Layout
