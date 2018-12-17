import React, { Component } from 'react';
import "./appStyle.css";
import Button from "./Button";
import Card from "./Card";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {question: {},answerStreak: 0};
    this.onDecision = this.onDecision.bind(this);
  }
  render() {
      let buttons;
      if (this.state.question.answers){
          buttons = this.state.question.answers.map((el)=>{
            return <Button onSelect={this.onDecision} item={el}></Button>
      })
    
    }
    return (
       <div>
            <header></header>
            <main>
               <p>Licznik dobrych odpowiedzi: {this.state.answerStreak}</p>
               <Card content={this.state.question.content}/>
               <div className="buttons__container">
                  {buttons}
               </div>
            </main>
       </div>
    );
  }

  componentDidMount(){
    this.getQuestion();   
  }

  getQuestion(){
    fetch("/api/get_question")
    .then(response => response.json())
    .then(jsondata => this.setState({question: jsondata}))
  }

  onDecision(decision){
      if (decision.isTrue === true){ //selected answer is true
        this.setState({answerStreak: this.state.answerStreak+1});
        alert("dobra odp!!!")
     
      }
      else{   //selected answer is false
        this.setState({answerStreak: 0});
        alert("zła odp!!!")
      }
  }
 
}
export default App;
