import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Timer from './Timer.js';
import ActivePomodoroInput from './ActivePomodoroInput.js';
import PassivePomodoroInput from './PassivePomodoroInput.js';

class App extends Component {

    constructor() {
        super();

        this.active = false;


        this.state = {
            time: 0,
            pomodoroStarted: false,
            passiveTime: 0,
            active: false,
            playText: 'Get Started!',
            activeInterval: null,
            finalMin: false,
            completed: 0,
            activeTime: 0,
            typingActiveTime: 'false'
        }



        this.miliseconds = this.miliseconds.bind(this);
        this.countdownFunction = this.countdownFunction.bind(this);
        this.runActiveTime = this.runActiveTime.bind(this);
        this.resetActiveTime = this.resetActiveTime.bind(this);
        this.resetPassiveTime = this.resetPassiveTime.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handlePassiveChange = this.handlePassiveChange.bind(this);
    }



    handlePassiveChange(e) {
        console.log('event handleActiveChange time ', e.target);
        this.setState({typingActiveTime: 'true'});

        this.setState({passiveTime: parseInt(e.target.value)});
    }

    handleActiveChange(e) {
        console.log('event handleActiveChange time ', e.target);
        this.setState({typingActiveTime: 'true'});
        this.setState({ activeTime: parseInt(e.target.value) });
        this.setState({time: this.miliseconds(0,0, parseInt(e.target.value)) });
    }

    miliseconds = (hrs, min, sec) =>  {

        return ((hrs * 60 * 60 + min * 60 + sec) * 1000);

    }

    countdownFunction = () => {
        let currentTime = this.state.time;

        this.setState(prevState => {

            currentTime = prevState.time - 1000;
            return { time: prevState.time - 1000 }
        })

        if(currentTime <= this.miliseconds(0,0,10)) {
            this.setState({finalMin: true});
        }

        if(currentTime === 0 ) {
            this.setState({finalMin: false});

            if(this.active) {
                 this.setState(prevState => {


                    return { completed: prevState.completed+1 }
                })
            }
            this.active = !this.active

            if(this.active) {
                this.resetActiveTime();
            } else {
                this.resetPassiveTime();
            }

        }
    }

    resetActiveTime = () => {
      this.setState({time: this.miliseconds(0,0, this.state.activeTime)})
      this.setState({playText: 'Time has started!'});
    }

    resetPassiveTime = () => {
     this.setState({time: this.miliseconds(0, 0, this.state.passiveTime)})
     this.setState({playText: 'Relax!'});
    }




    runActiveTime = () => {

            this.setState({pomodoroStarted: true});
            this.active = true;
            this.setState({active: true});
            this.setState({activeInterval: setInterval(this.countdownFunction, 1000)});
            this.setState({playText: 'Go GO GO'});

    }


    render() {
        return (
            <div className="App">
        <header className="App-header">POMODORO</header>

          <h2 className>
           Get some stuff done!  You have completed {this.state.completed} pomodoros!
          </h2>
          <p className="play-text">{this.state.playText}</p>
             <ActivePomodoroInput handleActiveSubmit= {this.handleSubmit} handleActiveChange={this.handleActiveChange} active={this.state.active}/>
             <br/>
              <PassivePomodoroInput handleActiveSubmit= {this.handleSubmit} handlePassiveChange={this.handlePassiveChange} active={this.state.active}/>
              <br/>
             <p className={`show-typing-${this.state.typingActiveTime} ${this.state.pomodoroStarted}`}>Press get started button when you've entered active and passive times</p>
           <Button onClick={this.runActiveTime} playText={this.state.playText} started={this.state.active}/>
           <hr/>
          <Timer time={this.state.time} finalMin={this.state.finalMin}/>


      </div>
        );
    }
}

export default App;
