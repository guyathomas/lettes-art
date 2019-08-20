import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/Gallery"
import FilterBar from "../components/FilterBar"

import './index.css';
// import Image from "../components/image"
// import SEO from "../components/seo"

// This query is executed at build time by Gatsby.

// import images from "../images"
import { AVAILABILITY } from "../constants"
class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      availabilityFilter: AVAILABILITY.ALL,
    }
  }

  onChangeAvailability = (event, value) =>
    this.setState({ availabilityFilter: value })

  reduceImagesWithFilter = (images) => {
    if (this.state.availabilityFilter === AVAILABILITY.ALL) {
      return images
    }

    return images.filter(
      image =>
        (this.state.availabilityFilter === AVAILABILITY.FOR_SALE &&
          image.forSale) ||
        (this.state.availabilityFilter === AVAILABILITY.SOLD && image.sold)
    )
  }

  renderIndexPage = ({ fullHeader }) => (
    <>
      <div className={fullHeader ? "" : "hide-visibility"}>
        <FilterBar
          availabilityFilter={this.state.availabilityFilter}
          onChange={this.onChangeAvailability}
        />
      </div>
      { !!this.props.images.length && <Gallery images={this.reduceImagesWithFilter(this.props.images)} /> }
    </>
  )

  render() {
    return <Layout>{this.renderIndexPage}</Layout>
  }
}

IndexPage.defaultProps = {
  images: [],
}

export default IndexPage
