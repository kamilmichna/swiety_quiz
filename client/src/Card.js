import React, { Component } from 'react';
import "./CardStyle.css";


class Card extends Component {
  render() {
    return (
       <article className="card">{this.props.content}</article>
    );
  }

}

export default Card;
