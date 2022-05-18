import React, { useState } from "react";

function App() {

  const [Heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function submit(event) {
    setHeading("Good job!" + " " + name);
    console.log(Heading)
    event.preventDefault();
  };

  function mouseOver() {
    setMouseOver(true)
  };

  function mouseOut() {
    setMouseOver(false)
  };

  function handleChange(event) {
    setName(event.target.value)
  }


  return (
    <div className="container">
      <h1>{Heading}</h1>
      <form onSubmit = {submit}>
      <input onChange={handleChange} type="text" placeholder="What's your name?" value = {name}/>
      <button type = "submit" onMouseOver={mouseOver} onMouseOut = {mouseOut} style={{backgroundColor: isMouseOver ? "black": "white"}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
