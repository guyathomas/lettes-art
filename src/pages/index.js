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
    image => image.forSale && availabilityFilter === AVAILABILITY.FOR_SALE
  )
}

const transformResponse = nodes =>
  nodes.map(node => ({
    src: `https:${get(node, 'images[0]file.url')}`,
    forSale: node.forSale || false,
    caption: get(node, 'description.content[0].content[0].value', ''),
    width: get(node, 'images[0].file.details.image.width'),
    height: get(node, 'images[0].file.details.image.height'),
  }))

const IndexPage = props => {
  const [availabilityFilter, setAvailabilityFilter] = useState(AVAILABILITY.ALL)
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
        forSale
        description {
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
