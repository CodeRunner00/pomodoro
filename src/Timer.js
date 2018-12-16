import React, { Component } from 'react';


class Timer extends Component {
  render() {

    let finalMin = this.props.finalMin;



    return <p className={`timer ${finalMin}`}>
            { Math.floor((this.props.time % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? '0'+Math.floor((this.props.time % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((this.props.time % (1000 * 60 * 60)) / (1000 * 60))} : {Math.floor((this.props.time % (1000 * 60)) / 1000) < 10 ? '0'+Math.floor((this.props.time % (1000 * 60)) / 1000) : Math.floor((this.props.time % (1000 * 60)) / 1000)  }
          </p>;
  }
}

export default Timer;