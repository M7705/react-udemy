import React from "react"



function Heading() {

const d = new Date();
let currentHour = d.getHours();

console.log(currentHour);

let welcome = "";
let headingColor = {}
if ( 0 <= currentHour && currentHour < 12) {
  welcome = "Good Morning";
  headingColor = { color: "red"}
}
else if (12 <= currentHour && currentHour < 18) {
  welcome = "Good Afternoon"
  headingColor = { color: "green"}
}
else {
  welcome = "Good Evening"
  headingColor = { color: "blue"}
}
    return (
    <h1 className = "heading" style = {headingColor}>{welcome}</h1>
    )
}

export default Heading
