import React from 'react'

import './Footer.css'

export const Footer = () => (
  <footer className="footer-container">
    <ul className="social-media-content">
    <li className="social-media-item">
        <a
          target="_blank"
          href={'mailto:barlow.collette+lettesart@gmail.com'}
        >
          <img src="https://res.cloudinary.com/dqvlfpaev/image/upload/v1567698737/download_gqlbb5.png" />
        </a>
      </li>
      <li className="social-media-item">
        <a
          target="_blank"
          href="https://www.facebook.com/Lettes-Art-2018927498386621/"
        >
          <img src="https://res.cloudinary.com/dqvlfpaev/image/upload/v1553930234/fb_xx7qtb.png" />
        </a>
      </li>
      <li className="social-media-item">
        <a target="_blank" href="https://www.instagram.com/lettes_art">
          <img src="https://res.cloudinary.com/dqvlfpaev/image/upload/v1553930234/ig_lynhct.png" />
        </a>
      </li>
    </ul>
  </footer>
)
