import React, { useState } from 'react'
import ReactPhotoGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import './Gallery.css'

export const Gallery = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setViewerIsOpen(false)
    setCurrentImage(0)
  }

  if (!images.length) {
    return null
  }

  return (
    <>
      <ReactPhotoGallery
        photos={images}
        onClick={openLightbox}
        direction="column"
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              backdropClosesModal
              currentIndex={currentImage}
              views={images.map(image => ({ src: image.src }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}
