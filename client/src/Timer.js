import React, { Component } from 'react';
import './TimerStyle.css';

class Timer extends Component {
  
  render() {
    return (
       <div className="timer">Pozostały czas na pytanie: {this.props.time} sekund</div>
    );
  }


}

export default Timer;
