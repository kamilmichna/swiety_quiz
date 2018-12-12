import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
       <div>
          <button onClick={this.handleClick}>Chuja</button>
       </div>
    );
  }
  handleClick(e){
    fetch("/api/question")
    .then(response => response.json())
    .then(jsondata => console.log(jsondata))
  }
}

export default App;
