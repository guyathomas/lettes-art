import React, { useState, useCallback } from 'react'
import ReactPhotoGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { EMAIL } from '../constants'
import './Gallery.css'

const BuyNowButton = ({ currentImage = {} }) =>
  currentImage.forSale ? (
    <a
      target="_blank"
      className="buy-now"
      href={`mailto:barlow.collette+lettesart@gmail.com?subject=${
        EMAIL.SUBJECT
      }&body=${EMAIL.CREATE_BODY(currentImage.src)}`}
    >
      Buy Now
    </a>
  ) : null

const Gallery = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { image, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }, [])

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
