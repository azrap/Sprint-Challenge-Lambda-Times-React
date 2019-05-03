import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  
 

  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/

        props.cards.map(ele => (
             <Card card={ele} />

         ))} 

    </div>
  )
  }




/* /*
proptypes:
Cards:
- headline
- tab
-img
-author

*/ 

export default Cards;