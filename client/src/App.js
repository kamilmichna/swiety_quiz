import React, { Component } from 'react';
import "./appStyle.css";
import Button from "./Button";
import Card from "./Card";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {question: {}}
  }
 componentDidMount(){
    this.getQuestion();
    

  }
  getQuestion(){
    fetch("/api/get_question")
    .then(response => response.json())
    .then(jsondata => this.setState({question: jsondata}))
  }

  render() {
      let buttons;
      if (this.state.question.answers){
          buttons = this.state.question.answers.map((el)=>{
            return <Button content={el}></Button>
      })
    
    }
    return (
       <div>
            <header></header>
            <main>
               <Card content={this.state.question.content}/>
               <div className="buttons__container">
                  {buttons}
               </div>
            </main>
       </div>
    );
  }
 
}
export default App;
