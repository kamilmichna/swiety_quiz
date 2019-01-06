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
            <svg className="logo" width="229" height="142" viewBox="0 0 229 142" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.6562 46.0625C25.6562 44.2917 25.0312 42.9375 23.7812 42C22.5312 41.0417 20.2812 40.0417 17.0312 39C13.7812 37.9375 11.2083 36.8958 9.3125 35.875C4.14583 33.0833 1.5625 29.3229 1.5625 24.5938C1.5625 22.1354 2.25 19.9479 3.625 18.0312C5.02083 16.0938 7.01042 14.5833 9.59375 13.5C12.1979 12.4167 15.1146 11.875 18.3438 11.875C21.5938 11.875 24.4896 12.4688 27.0312 13.6562C29.5729 14.8229 31.5417 16.4792 32.9375 18.625C34.3542 20.7708 35.0625 23.2083 35.0625 25.9375H25.6875C25.6875 23.8542 25.0312 22.2396 23.7188 21.0938C22.4062 19.9271 20.5625 19.3438 18.1875 19.3438C15.8958 19.3438 14.1146 19.8333 12.8438 20.8125C11.5729 21.7708 10.9375 23.0417 10.9375 24.625C10.9375 26.1042 11.6771 27.3438 13.1562 28.3438C14.6562 29.3438 16.8542 30.2812 19.75 31.1562C25.0833 32.7604 28.9688 34.75 31.4062 37.125C33.8438 39.5 35.0625 42.4583 35.0625 46C35.0625 49.9375 33.5729 53.0312 30.5938 55.2812C27.6146 57.5104 23.6042 58.625 18.5625 58.625C15.0625 58.625 11.875 57.9896 9 56.7188C6.125 55.4271 3.92708 53.6667 2.40625 51.4375C0.90625 49.2083 0.15625 46.625 0.15625 43.6875H9.5625C9.5625 48.7083 12.5625 51.2188 18.5625 51.2188C20.7917 51.2188 22.5312 50.7708 23.7812 49.875C25.0312 48.9583 25.6562 47.6875 25.6562 46.0625ZM20.0625 0.3125H29.9062L21.25 10H13.9062L20.0625 0.3125ZM76.875 44.875L83 12.5H92.3438L82.25 58H72.8125L65.4062 27.5625L58 58H48.5625L38.4688 12.5H47.8125L53.9688 44.8125L61.4688 12.5H69.4062L76.875 44.875ZM107.406 58H98.0312V12.5H107.406V58ZM143.5 38.2812H125.5V50.4688H146.625V58H141.875C140.333 58.875 139.146 59.7292 138.312 60.5625C137.479 61.4167 137.062 62.3958 137.062 63.5C137.062 64.8542 137.75 65.5312 139.125 65.5312C139.812 65.5312 140.646 65.3229 141.625 64.9062L142.531 69.8125C141.01 70.7292 139.292 71.1875 137.375 71.1875C135.292 71.1875 133.583 70.6042 132.25 69.4375C130.938 68.2917 130.281 66.6979 130.281 64.6562C130.281 62.0104 131.49 59.7917 133.906 58H116.125V12.5H146.562V20.0938H125.5V30.9375H143.5V38.2812ZM187 20.0938H173.062V58H163.688V20.0938H149.938V12.5H187V20.0938ZM208.562 33L218.031 12.5H228.281L213.344 41.5V58H203.812V41.5L188.875 12.5H199.156L208.562 33ZM119.062 111.281C119.062 115.531 118.375 119.229 117 122.375C115.625 125.5 113.719 128.01 111.281 129.906L118.844 135.844L112.875 141.125L103.188 133.344C102.083 133.531 100.938 133.625 99.75 133.625C95.9792 133.625 92.6146 132.719 89.6562 130.906C86.6979 129.094 84.4062 126.51 82.7812 123.156C81.1562 119.781 80.3333 115.906 80.3125 111.531V109.281C80.3125 104.802 81.1146 100.865 82.7188 97.4688C84.3438 94.0521 86.625 91.4375 89.5625 89.625C92.5208 87.7917 95.8958 86.875 99.6875 86.875C103.479 86.875 106.844 87.7917 109.781 89.625C112.74 91.4375 115.021 94.0521 116.625 97.4688C118.25 100.865 119.062 104.792 119.062 109.25V111.281ZM109.562 109.219C109.562 104.448 108.708 100.823 107 98.3438C105.292 95.8646 102.854 94.625 99.6875 94.625C96.5417 94.625 94.1146 95.8542 92.4062 98.3125C90.6979 100.75 89.8333 104.333 89.8125 109.062V111.281C89.8125 115.927 90.6667 119.531 92.375 122.094C94.0833 124.656 96.5417 125.938 99.75 125.938C102.896 125.938 105.312 124.708 107 122.25C108.688 119.771 109.542 116.167 109.562 111.438V109.219ZM160.375 87.5V117.469C160.375 122.448 158.812 126.385 155.688 129.281C152.583 132.177 148.333 133.625 142.938 133.625C137.625 133.625 133.406 132.219 130.281 129.406C127.156 126.594 125.562 122.729 125.5 117.812V87.5H134.875V117.531C134.875 120.51 135.583 122.688 137 124.062C138.438 125.417 140.417 126.094 142.938 126.094C148.208 126.094 150.885 123.323 150.969 117.781V87.5H160.375ZM178.031 133H168.656V87.5H178.031V133ZM196.688 125.469H219.625V133H184.969V127.5L207.469 95.0938H185V87.5H219.125V92.875L196.688 125.469Z" fill="white"/>
            <line x1="37.5" y1="69" x2="37.5" y2="140" stroke="white" stroke-width="5"/>
            <line x1="5" y1="86.5" x2="66" y2="86.5" stroke="white" stroke-width="5"/>
              </svg>
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
      window.setTimeout(()=>this.setState({isModalVisible:false}),2000)
      window.setTimeout(()=>this.card.classList.remove('card--hidden'),2000)
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
          
            
            
        }   
    },1000)
  
    
    
    
  }
  win(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: this.state.answerStreak+1});
      this.showModal(true);
      window.clearInterval(this.tickInterval);
      window.setTimeout(()=>{
        this.setState({time: 15});
        this.tick();
      },3000)

 
  }
  loose(){
      this.card.classList.add('card--hidden');
      this.setState({answerStreak: 0,idList: []});
      this.showModal(false);
      window.clearInterval(this.tickInterval)
      window.setTimeout(()=>{
        this.setState({time: 15});
        this.tick();
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
