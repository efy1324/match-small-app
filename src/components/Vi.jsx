import React from 'react';



class Vi extends React.Component {
  state = {  } 
  render() { 
    return (
      <button onClick={this.props.onClick}>
         ✔
      </button>
    );
  }
}
 
export default Vi;