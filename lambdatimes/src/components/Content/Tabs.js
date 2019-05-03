import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'


const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            }
            
              

              {props.tabs.map(eTab => (
                <Tab tab={eTab} 
                selectedTab={props.selected}
                selectTabHandler={props.selectTabHandler} />

              ))
            }
            
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isrequired,
  selectedTab: PropTypes.string.isrequired,
  selectHandler: PropTypes.func.isrequired

}

// Make sure to use PropTypes to validate your types!
export default Tabs;


/*proptypes:
  - tabs
  - selectedTab
  - changeSelected
  - Cards
  */
