import React from 'react'
import noop from 'lodash/noop'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import { AVAILABILITY } from '../../constants'

export const FilterBar = ({
  availabilityFilter = AVAILABILITY.FOR_SALE,
  onChange = noop,
}) => {
  return (
    <div>
      <Tabs
        value={availabilityFilter}
        onChange={onChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="For Sale" />
        <Tab label="Gallery" />
      </Tabs>
    </div>
  )
}
