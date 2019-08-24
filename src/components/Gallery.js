import React, { useState } from 'react'
import ReactPhotoGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import './Gallery.css'

const Gallery = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (event, { image, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <ReactPhotoGallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              backdropClosesModal
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Gallery
