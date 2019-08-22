import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get';

import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import FilterBar from "../components/FilterBar"

import './index.css';
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
        (
          image.forSale 
          && this.state.availabilityFilter === AVAILABILITY.FOR_SALE
        )
    )
  }

  renderIndexPage = ({ fullHeader }) => {
    const rawArt = get(this, 'props.data.allContentfulArt.nodes', []);
    const transformedArt = this.transformResponse(rawArt);
    const selectedArt = this.reduceImagesWithFilter(transformedArt)
    return (
      <>
      <div className={fullHeader ? "" : "hide-visibility"}>
        <FilterBar
          availabilityFilter={this.state.availabilityFilter}
          onChange={this.onChangeAvailability}
        />
      </div>
      <Gallery images={selectedArt} />
    </>
    )
  }

  transformResponse = nodes => 
    nodes.map( node => 
      ({ 
        src: `https:${get(node, 'images[0]file.url')}`,
        forSale: node.forSale || false,
        caption: get(node, 'description.content[0].content[0].value', ''),
        // height: 400,
        // width: 400,
      })
    )

  render() {
    return <Layout>{this.renderIndexPage}</Layout>
  }
}

IndexPage.defaultProps = {
  images: [],
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArt {
      nodes {
        title,
        images {
          file {
            url
            fileName
            contentType,
            details{
              size,
              image {
                width
                height
              }
            }
          }
        },
        forSale,
        description {
          id,
          content {
            nodeType,
            content {
              value
              nodeType
            }
          }
        }
      },
    }
  }
`
