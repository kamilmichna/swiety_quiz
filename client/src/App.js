import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
       <div>
          <button onClick={this.handleClick}>Chuj</button>
       </div>
    );
  }
  handleClick(e){
    fetch("http://localhost:2000/")
    .then(response => response.json())
    .then(jsondata => console.log(jsondata))
  }
}

export default App;
