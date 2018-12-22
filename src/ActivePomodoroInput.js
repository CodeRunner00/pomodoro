import React, { Component } from 'react';

class ActivePomodoroInput extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const time = this.props.time;
    return (
      <form onSubmit={this.props.handleActiveSubmit}>
        <label>
          Enter an active Pomodoro time:
          <input type="text" value={time} onChange={this.props.handleActiveChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ActivePomodoroInput;