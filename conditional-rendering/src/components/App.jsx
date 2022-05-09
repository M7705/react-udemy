import React from "react";
import Login from "./Login"

const user = "M7705"
let userIsRegistered = true;

function App() {
  return (
    userIsRegistered ?
      <Login name = {user} button = "Login"/> : <Login name = {user} button = "Register" /> 
  );
}

export {App, userIsRegistered};
