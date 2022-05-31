import React from 'react';
import "./card.css"

class Card extends React.Component {
  state = {  } 
  render() { 
   
    return (
      <div >

        <img src={require(`../images/${this.props.imageNum}.jpg`)}  alt=""/>
        <h4>{this.props.imgtext}</h4>
      </div>
    );
  }
}
 
export default Card;
