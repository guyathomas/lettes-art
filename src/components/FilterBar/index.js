import React, { useContext } from 'react'
import noop from 'lodash/noop'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

import { LayoutContext } from 'components/Layout';
import { AVAILABILITY } from '../../constants'

export const FilterBar = ({
  availabilityFilter = AVAILABILITY.FOR_SALE,
  onChange = noop,
}) => {
  const { aboveShrinkThreshold } = useContext(LayoutContext)
  return (
    <div className={aboveShrinkThreshold ? '' : 'hide-visibility'}>
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
