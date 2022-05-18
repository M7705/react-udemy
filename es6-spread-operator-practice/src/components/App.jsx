import React, { useState } from "react";

function App() {
  const [addedItem, setAddedItem] = useState("");
  const [listArray, setListArray] = useState([]);
  const [toDoList, setToDoList] = useState(<li>A Item</li>);

  function inputChanged(event) {
    setAddedItem(event.target.value)
  }

  function submitItem() {
    console.log(addedItem);
    setListArray(prevArray => [...prevArray, addedItem]);
    console.log(listArray)
    let newToDoList = "";
    newToDoList = listArray.map(item => (<li> `{item}`</li>))
    // listArray.forEach(item => (newToDoList += "<li>" + item + "</li>"))
    // // console.log(newToDoList)
    // console.log(listArray.forEach(item => ("<li>" + item + "</li>")))
    // setToDoList(newToDoList);
    console.log(newToDoList);
    setToDoList(newToDoList);
    console.log(toDoList);
    }

// 1. 왜 li를 문자열로 인식하는가??
// 2. item은 왜 변수로 인식하지 못하는가 ??
// 3. newToDoList는 업데이트가 왜 한발 늦는가???
// 4. 리액트는 array를 바로 text로 반환하는가???

    


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
          {toDoList}
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
