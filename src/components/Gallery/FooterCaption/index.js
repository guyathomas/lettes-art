import React from 'react'

export const FooterCaption = ({
  image: { art: { caption, height, width, frame, title } } = {},
}) => {
  return (
    <div className="index-footer">
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
