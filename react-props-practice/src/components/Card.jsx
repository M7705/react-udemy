import React from 'react';
import Avatar from './Avatar';
import Info from './Info';

function Card(props) {
    return (
    <div> 
    <div className="card">
      <div className="top">
        <h2>{props.name} {props.keyvalue}</h2>
        <Avatar imgURL = {props.imgURL}/>
      </div>
      <div className="bottom">
        <Info info = {props.phone}/>
        <Info info = {props.email}/>
      </div>
    </div>
    </div>
    )
}

export default Card;
