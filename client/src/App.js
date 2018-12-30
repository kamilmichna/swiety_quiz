import React, { Component } from 'react';
import "./appStyle.css";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./Card";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {question: {},answerStreak: 0,isModalVisible: false,isModalGood: false,idList: []};
    this.onDecision = this.onDecision.bind(this);
    this.win = this.win.bind(this);
    this.loose = this.loose.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  render() {
      let buttons;
      this.card = document.querySelector('.card'); // card el
      if (this.state.question.answers){
          buttons = this.state.question.answers.map((el,i)=>{
            return <Button key={i} onSelect={this.onDecision} item={el}></Button>
      })

    
    }
    return (
       <div>
            <Modal isVisible={this.state.isModalVisible} isGood={this.state.isModalGood}/>
            <header></header>
            <main>
               <p className="good_answers_counter">Licznik dobrych odpowiedzi: {this.state.answerStreak}</p>
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
    .then(jsondata => {
    if (this.state.idList.includes(jsondata.id) === false){
         this.setState({question: jsondata,idList: [...this.state.idList,jsondata.id]});
    }
    else {
      this.getQuestion();
    }

  
      
    });
    
    
  }
  showModal(isGood){
    if (isGood === true){
      this.setState({isModalGood:true})
      this.setState({isModalVisible:true});
      window.setTimeout(()=>this.getQuestion(),1000)
      window.setTimeout(()=>this.setState({isModalVisible:false}),2000)
      window.setTimeout(()=>this.card.classList.remove('card--hidden'),2000)
    }
    else{
      this.setState({isModalGood:false})
      this.setState({isModalVisible:true});
      window.setTimeout(()=>this.getQuestion(),1000)
      window.setTimeout(()=>this.setState({isModalVisible:false}),3000)
      window.setTimeout(()=>this.card.classList.remove('card--hidden'),3000)
    }
   
  
  }
  win(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: this.state.answerStreak+1});
      this.showModal(true);

 
  }
  loose(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: 0,idList: []});
      this.showModal(false);
  }

  onDecision(decision){

      if (decision.isTrue === true){ //selected answer is true
          this.win();
      }
      else{   //selected answer is false
          this.loose();
      }
  }
 
}
export default App;
