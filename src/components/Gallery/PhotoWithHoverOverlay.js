import React from 'react'
import { Photo } from 'react-photo-gallery'
import { FooterCaption } from './FooterCaption'

export const PhotoWithHoverOverlay = ({
  margin,
  direction,
  top,
  left,
  ...rest
}) => {
  /*
    Apply Styles to container
    From here https://github.com/neptunian/react-photo-gallery/blob/master/src/Photo.js
  */
  const containerStyle = { margin: margin, display: 'block' }
  if (direction === 'column') {
    containerStyle.position = 'absolute'
    containerStyle.left = left
    containerStyle.top = top
  }

  return (
    <div
      className="photo-container"
      style={
        rest.onClick ? { ...containerStyle, cursor: 'pointer' } : containerStyle
      }
    >
      <Photo {...rest} />
      <div className="footer-caption-container">
        <FooterCaption image={rest.photo} />
      </div>
    </div>
  )
}
