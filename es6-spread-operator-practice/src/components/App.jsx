"use strict";

import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [addedItem, setAddedItem] = useState("");
  const [listArray, setListArray] = useState([]);
  // const [toDoList, setToDoList] = useState(<li>A Item</li>);


  function inputChanged(event) {
    setAddedItem(event.target.value)
  }

  function submitItem() {
    setListArray(prevArray => [...prevArray, addedItem]);
    setAddedItem("");
  }
    // console.log("insidelistArray:"+listArray)
    // let newToDoList = "";
    // newToDoList = listArray.map(item => <li> {item} </li>)
    // // listArray.forEach(item => newToDoList += <li>{item}</li>)
    // // // console.log(newToDoList)
    // // console.log(listArray.forEach(item => ("<li>" + item + "</li>")))
    // // setToDoList(newToDoList);
    // console.log("newToDoList:"+newToDoList);
    // setToDoList(newToDoList);
    // console.log("toDoList:"+toDoList);
    // }

    // let newToDoList = "";
    // newToDoList = listArray.map(item => <li> {item} </li>)
    // setToDoList(newToDoList)

    // console.log("OutsidelistArray:"+listArray);
    // console.log("OutsidelistArray:"+toDoList);

//     1. 왜 li를 문자열로 인식하는가?? <li>를 쌍따옴표 안에 입력하는 경우 문자열로 인식. 그러나 html에 바로 li를 입력할 때에는 따옴표 안에 <li>를 입력하는 경우 태그로 인식함. 아마도 jsx와 html의 차이로 보임
// 2. item은 왜 변수로 인식하지 못하는가 ?? item은 li라는 jsx안에 들어 있기 때문에 jsx 문법에 따라서 중괄호 안에 넣어줘야 함
// 3. newToDoList는 업데이트가 왜 한발 늦는가??? function 안의 set매쏘드는 function이 완료될때 기존 값을 업데이트 함. 
// 4. 리액트는 array를 바로 text로 반환하는가??? 그렇슴. 리액트의 문법임. 

    function deleteItem(id) {
      setListArray(prevArray =>  prevArray.filter(
        (value, index) => {return index !== id}  
      ))
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputChanged} type="text" value = {addedItem}/>
        <button onClick={submitItem} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listArray.map((item, index) => (
            <Item key = {index} id = {index} text = {item}
            delete  = {deleteItem}/>))}
        </ul>
      </div>
    </div>
  );
}

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

export default App;
