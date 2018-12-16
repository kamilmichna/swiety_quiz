import React, { Component } from 'react';
import "./ButtonStyle.css";


class Button extends Component {
  render() {
    return (
       <button className="answer_button"onClick={this.clickHandle}>{this.props.content}</button>
    );
  }
  clickHandle(){
    document.querySelector('.card').classList.add('card--hidden');
  }

}

export default Button;
