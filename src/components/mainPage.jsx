import React from 'react';
import Vi from './Vi';
import X from './X';
import Card from './card';
import EmojiAndCounter from './emogi&counter';


class MachMainPage extends React.Component {

  state = { positiveCounter: 0, nagitiveCounter: 0, imageNum: 1, imgtext: "Do you like me", }



  handleClickY = () => {
    this.setState(prevState => {
      return { positiveCounter: prevState.positiveCounter + 1 };
    });
    if (this.state.imageNum < 10) {
      this.setState(prevState => {
        return { imageNum: prevState.imageNum + 1 };
      });
    } else {
      if (this.state.positiveCounter > this.state.nagitiveCounter) {
        alert('you love me')
      }
    }
  }
  handleClickX = () => {
    if (this.state.imageNum < 10) {
      this.setState(prevState => {
        return { nagitiveCounter: prevState.nagitiveCounter + 1 };
      });
      this.setState(prevState => {
        return { imageNum: prevState.imageNum + 1 };
      });
    } else {
      if (this.state.positiveCounter > this.state.nagitiveCounter) {
        alert('you love me')
      }else{
        alert('not nice')
      }
    }
  }
  render() {

    return (
      <div>
        <EmojiAndCounter emoji="❤" counter={this.state.positiveCounter} />
        <EmojiAndCounter emoji="😢" counter={this.state.nagitiveCounter} />
        <br />
        <Card imgtext={this.state.imgtext} imageNum={this.state.imageNum} />
        <X onClick={this.handleClickX} />
        <Vi onClick={this.handleClickY} />
      </div>
    );
  }
}

export default MachMainPage;