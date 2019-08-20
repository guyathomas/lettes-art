import React, { Component } from "react";
import './Footer.css';

  class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <ul className="social-media-content">
          <li className="social-media-item" >
            <a target="_blank" href="https://www.facebook.com/Lettes-Art-2018927498386621/"><img src="https://res.cloudinary.com/dqvlfpaev/image/upload/v1553930234/fb_xx7qtb.png" /></a>
          </li>
          <li className="social-media-item" >
            <a target="_blank" href="https://www.instagram.com/lettes_art"><img src="https://res.cloudinary.com/dqvlfpaev/image/upload/v1553930234/ig_lynhct.png" /></a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;