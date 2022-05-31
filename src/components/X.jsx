import React from 'react';



class X  extends React.Component {
  state = {  } 
  render() { 
    return (
      <button onClick={this.props.onClick}>
         ❌
      </button>
    );
  }
}
 
export default X;