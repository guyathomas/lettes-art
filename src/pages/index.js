import React, { useState, useMemo } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout } from 'components/Layout'
import { Gallery } from 'components/Gallery'
import { FilterBar } from 'components/FilterBar'

import './index.css'
import { AVAILABILITY } from '../constants'

const reduceImagesWithFilter = (images, availabilityFilter) => {
  if (availabilityFilter === AVAILABILITY.ALL) {
    return images
  }

  return images.filter(
    image => image.art.forSale && availabilityFilter === AVAILABILITY.FOR_SALE
  )
}

const transformResponse = nodes =>
  nodes.map(node => ({
    art: {
      caption: get(node, 'caption.content[0].content[0].value'),
      height: node.artHeight,
      width: node.artWidth,
      frame: node.frame,
      forSale: node.forSale || false,
      title: node.title,
    },
    image: {
      src: `https:${get(node, 'images[0]file.url')}`,
      width: get(node, 'images[0].file.details.image.width'),
      height: get(node, 'images[0].file.details.image.height'),
    }
  }))

const IndexPage = props => {
  const [availabilityFilter, setAvailabilityFilter] = useState(AVAILABILITY.FOR_SALE)
  const onChangeAvailability = (event, value) => setAvailabilityFilter(value)

  const rawArt = get(props, 'data.allContentfulArt.nodes', [])
  const selectedArt = useMemo(() => {
    return reduceImagesWithFilter(transformResponse(rawArt), availabilityFilter)
  }, [rawArt, availabilityFilter])
  return (
    <Layout>
      <FilterBar
        availabilityFilter={availabilityFilter}
        onChange={onChangeAvailability}
      />
      <Gallery images={selectedArt} />
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArt {
      nodes {
        title
        images {
          file {
            url
            fileName
            contentType
            details {
              size
              image {
                width
                height
              }
            }
          }
        }
        artHeight
        artWidth
        frame
        forSale
        caption {
          id
          content {
            nodeType
            content {
              value
              nodeType
            }
          }
        }
      }
    }
  }
`
