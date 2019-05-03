import React from 'react';
import Tabs from './Tabs';
import PropTypes from 'prop-types'

const Tab = props => {
  console.log(props);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <div
      className={`tab ${props.selectedTab===props.tab? 'active-tab': null}`}
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isrequired,
  selectedTab: PropTypes.string.isrequired,
  selectHandler: PropTypes.func.isrequired

}



// Make sure you include PropTypes on your props.

export default Tab;
