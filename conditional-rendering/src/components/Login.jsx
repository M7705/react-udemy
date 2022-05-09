import React from "react";
import Input from "./Input";
import Button from "./Button";
import { userIsRegistered } from './App';

function Login(props) {
return (
    <div className="container">
    <h1> Hello {props.name}</h1>
    <form className="form">
    <Input type = "text" placeholder = "Username"/>
    <Input type = "text" placeholder = "Password"/>
    {!userIsRegistered && <Input type = "text" placeholder = "Confirm Password"/>}
    <Button type = "submit" placeholder = {props.button}/>
    </form>
    </div>
)
}

export default Login;