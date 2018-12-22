import React, { Component } from 'react';

class passivePomodoroInput extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const time = this.props.time;
    const active = 'input-'+this.props.active.toString();
    return (
      <form className={active} onSubmit={this.props.handleActiveSubmit}>
        <label>
          Enter an passive Pomodoro time:
          <input type="text" value={time} onChange={this.props.handlePassiveChange}/>
        </label>

      </form>
    );
  }
}

export default passivePomodoroInput;