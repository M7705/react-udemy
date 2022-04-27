import React from 'react'

function Card(prop) {
    return (
    <div> 
    <div className="card">
      <div className="top">
        <h2>{prop.name}</h2>
        <img
          src={`../img/${prop.name}.png`}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p>{prop.phone}</p>
        <p>{prop.email}</p>
      </div>
    </div>
    </div>
    )
}

export default Card;
