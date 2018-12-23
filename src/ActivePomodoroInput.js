import React, { Component } from 'react';

class ActivePomodoroInput extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const time = this.props.time;
    const active = 'input-'+this.props.active.toString();
    return (
      <form className={active} onSubmit={this.props.handleActiveSubmit}>
        <label>
          Enter an active pomodoro time:
          <input type="text" value={time} onChange={this.props.handleActiveChange}/>
        </label>

      </form>
    );
  }
}

export default ActivePomodoroInput;