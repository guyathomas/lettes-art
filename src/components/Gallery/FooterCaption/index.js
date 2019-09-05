import React from 'react'

import './FooterCaption.css';

export const FooterCaption = ({
  image: { art: { caption, height, width, frame, title } } = {},
}) => {
  return (
    <div className="footer-caption">
      {title && <h2>{title}</h2>}
      {caption && <h3>{caption}</h3>}
      {width && height && (
        <li>
          Dimensions: {width} x {height} cm
        </li>
      )}
      {frame && <li>Frame: {frame} </li>}
    </div>
  )
}
