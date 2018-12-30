import React, { Component } from 'react';
import "./ModalStyle.css";


class Button extends Component {
  constructor(props){
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  render() {
      let isVisible = this.props.isVisible,
          isGood = this.props.isGood;   
      if (isVisible===true){
          if (isGood === false){
            return <div className="modal modal--bad"><p>Przegrałeś, zacznij od nowa!</p></div>;
          }
          else {
            return <div className="modal modal--good"><p>Brawo! Świetna odpowiedź!</p></div>;
          }
          
      }
      
      return <div className="modal modal--invisible"></div>;
      
      
  }
  clickHandle(){
      this.props.onSelect(this.props.item); 
  }

}

export default Button;
