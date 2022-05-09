import React from "react";

function Button(props) {
    return (
        <button type = {props.type}>{props.placeholder}</button>
    )
}

export default Button;