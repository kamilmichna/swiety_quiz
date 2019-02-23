import React, { Component } from 'react';
import "./appStyle.css";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./Card";
import Timer from "./Timer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {question: {},answerStreak: 0,isModalVisible: false,isModalGood: false,idList: [],time: 15};
    this.onDecision = this.onDecision.bind(this);
    this.win = this.win.bind(this);
    this.loose = this.loose.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.showModal = this.showModal.bind(this);
    this.tick = this.tick.bind(this);
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
            <header>
              <a href="/landing">ŚwiętyQuiz</a>
            </header>      
            <main>
               <p className="good_answers_counter">Licznik dobrych odpowiedzi: {this.state.answerStreak}</p>
               <Card content={this.state.question.content}/>
               <div className="buttons__container">
                  {buttons}
               </div>
            </main>
            <Timer time={this.state.time}/>
       </div>
    );
  }

  componentDidMount(){
    this.getQuestion();   
    this.tick();
    
  }
  getQuestion(){
    return new Promise((resolve,reject)=>{
      fetch("/api/get_question")
      .then(response => response.json())
      .then(jsondata => {

        if (this.state.idList.includes(jsondata.id) === false){
          console.log('hehe')
          this.setState({question: jsondata,idList: [...this.state.idList,jsondata.id]});
          resolve(jsondata.content);

        }
        else {
            this.getQuestion();
            resolve();
        }

      })
     
    })
  }

showModal(isGood){
    if (isGood === true){
     
      this.setState({isModalGood:true})
      this.setState({isModalVisible:true});
      this.getQuestion().then(()=>{
        window.setTimeout(()=>this.setState({isModalVisible:false}),3000)
        window.setTimeout(()=>this.card.classList.remove('card--hidden'),3000)
      });
    }
    else{
      this.setState({isModalGood:false})
      this.setState({isModalVisible:true});
      window.setTimeout(()=>this.getQuestion(),1000)
      this.getQuestion().then(()=>{
        window.setTimeout(()=>this.setState({isModalVisible:false}),3000)
        window.setTimeout(()=>this.card.classList.remove('card--hidden'),3000)
      });
    }
   
  
  }
  tick(){
   
    this.tickInterval =  window.setInterval(()=> {
       
        if (this.state.time > 0){
            this.setState({time: this.state.time-1})
       }
       else if (this.state.time === 0){
            window.clearInterval(this.tickInterval);
            this.loose();
            this.tick();
          
            
            
        }   
    },1000)
  
    
    
    
  }
  win(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: this.state.answerStreak+1});
      this.showModal(true);
      window.setTimeout(()=>{
        this.setState({time: 15});   
      },3000)

 
  }
  loose(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: 0,idList: []});
      this.showModal(false);
      window.setTimeout(()=>{
        this.setState({time: 15});
      },3000)
    
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
