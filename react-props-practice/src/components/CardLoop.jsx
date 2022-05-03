import React from 'react'
import contacts from '../contacts'

function CardLoop(prop) {
    // for (let i = 0; i<contacts.length; i++){
        return (
            <div> 
            <div className="card">
              <div className="top">
                <h2>{prop.contacts[0].name}</h2>
                <img
                  src={prop.contacts[0].imgURL}
                  alt= "image"
                />
              </div>
              <div className="bottom">
                <p>{prop.contacts[0].phone}</p>
                <p>{prop.contacts[0].email}</p>
              </div>
            </div>
            </div>
            )
    // }
  }

    export default CardLoop;