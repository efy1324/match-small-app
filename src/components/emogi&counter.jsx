import React from 'react';


class EmojiAndCounter extends React.Component {
  state = {  } 
  render() { 
    return (
      <div>
       <span>{this.props.emoji}{this.props.counter}</span> 
      </div>
    );
  }
}
 
export default EmojiAndCounter;