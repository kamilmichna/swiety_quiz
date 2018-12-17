import React, { Component } from 'react';
import "./ButtonStyle.css";


class Button extends Component {
  constructor(props){
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  render() {
    return (
       <button className="answer_button" onClick={this.clickHandle}>{this.props.item.content}</button>
    );
  }
  clickHandle(){
      this.props.onSelect(this.props.item); 
  }

}

export default Button;
