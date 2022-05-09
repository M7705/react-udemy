import React, { useState } from "react";

function App() {

  const [Heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function submit() {
    setHeading("Submitted")
  };

  function mouseOver() {
    setMouseOver(true)
  };

  function mouseOut() {
    setMouseOver(false)
  };


  return (
    <div className="container">
      <h1>{Heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick = {submit} onMouseOver={mouseOver} onMouseOut = {mouseOut} style={{backgroundColor: isMouseOver ? "black": "white"}}>Submit</button>
    </div>
  );
}

export default App;
