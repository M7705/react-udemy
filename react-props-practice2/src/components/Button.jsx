import React, { useState, useContext } from "react";
// import { InputContext } from "./App"

function Button(props) {
// const toDoInput = useContext(InputContext);

    return (
        <button onClick = {props.pMakeArrayData}>Add</button>
    )
}

export default Button;