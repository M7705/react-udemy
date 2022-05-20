import React, { useState, useContext } from "react";
import { InputContext } from "./App"


function Input(props) {
const myContext = useContext(InputContext);

    return (
        <input onChange={props.pGetInputData} type = "text" value = {myContext.realTimeValue} ></input>
    )
}

export default Input;