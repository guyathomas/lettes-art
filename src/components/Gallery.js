import React from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import { EMAIL } from "../constants";
import "./Gallery.css";

class PhotoGallery extends React.Component {
  static propTypes = {
    images: PropTypes.array
  };

  static defaultProps = {
    images: []
  };

  constructor() {
    super();
    this.state = {
      currentImage: 0
    };
  }

  static BuyNowButton = props =>
    props.currentImage.forSale ? (
      <a
        target="_blank"
        className="buy-now"
        href={`mailto:barlow.collette+lettesart@gmail.com?subject=${EMAIL.SUBJECT}&body=${EMAIL.CREATE_BODY(
          props.currentImage.src
        )}`}
      >
        Buy Now
      </a>
    ) : (
      <div />
    );

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () =>
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  gotoPrevious = () =>
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  gotoNext = () =>
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  render() {
    const currentImageObj = this.props.images[this.state.currentImage];
    return (
      <div>
        <Gallery photos={this.props.images} onClick={this.openLightbox} />
        <Lightbox
          customControls={[
            <PhotoGallery.BuyNowButton currentImage={currentImageObj} />
          ]}
          backdropClosesModal
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          currentImage={this.state.currentImage}
        />
      </div>
    );
  }
}

export default PhotoGallery;
