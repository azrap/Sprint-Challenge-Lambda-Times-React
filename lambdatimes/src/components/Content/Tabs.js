import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            }
            {
              console.log(props.tabs)}

              {props.tabs.map(eTab => (
                <Tab tab={eTab} 
                selectedTab={props.selected}
                selectTabHandler={props.changeSelected} />

              ))
            }
            
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;


/*proptypes:
  - tabs
  - selectedTab
  - changeSelected
  - Cards
  */
