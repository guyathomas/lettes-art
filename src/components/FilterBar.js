import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

class FilterBar extends React.Component {
  static defaultProps = {
    onChange: noop
  };

  static propTypes = {
    onChange: PropTypes.func,
    availabilityFilter: PropTypes.object.isRequired
  };

  render() {
    return (
      <Tabs
        value={this.props.availabilityFilter}
        onChange={this.props.onChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        <Tab label="For Sale" />
      </Tabs>
    );
  }
}

export default FilterBar;
