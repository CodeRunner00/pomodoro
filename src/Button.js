import React, { Component } from 'react';


function Button(props) {


    let active = props.started;
    let show = 'btn-text-'+active;
    return (<button onClick={props.onClick} className={show}>Hello, {props.playText}</button>);

}


export default Button;