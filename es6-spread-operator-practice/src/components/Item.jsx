import React, { useState } from "react";


function Item(props) {
    // const [isClicked, setIsClicked] = useState(false);

    // function click(){
    //     props.delete();
    //     // if (isClicked === false) {
    //     //     setIsClicked(true)
    //     // }
    //     // else {
    //     //     setIsClicked(false)
    //     // }
    // }
        
    return (
        <li onClick = {()=>{props.delete(props.id);}} 
        // style = {isClicked ? {textDecoration: "line-through"} : {}}
        > {props.text} </li>
    )
}
// when you click it trigger the useState
////onclick = attribute 



export default Item;