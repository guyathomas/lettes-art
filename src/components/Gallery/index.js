import React, { useState, useMemo, useCallback } from 'react'
import ReactPhotoGallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { FooterCaption } from './FooterCaption'
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

  const carouselViews = useMemo(
    () =>
      images.map(({ image: { src } }) => ({
        src,
      })),
    [images]
  )

  const galleryImages = useMemo(
    () =>
      images.map(({ image, ...rest }) => ({
        ...image,
        ...rest
      })),
    [images]
  )

  const onViewChange = useCallback((viewIndex) => { 
    setCurrentImage(viewIndex);
  }, []);
  return (
    <>
      <ReactPhotoGallery
        photos={galleryImages}
        onClick={openLightbox}
        direction="column"
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={carouselViews}
              trackProps={{
                onViewChange
              }}
              components={{
                FooterCaption: () => (
                  <FooterCaption image={galleryImages[currentImage]} />
                ),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}
