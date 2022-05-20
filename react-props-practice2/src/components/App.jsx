import React, { useState, createContext } from 'react';
import Input from './Input';
import Button from './Button';
import ItemList from './ItemList';

export const InputContext = createContext();

function App() {

  const[toDoInput, setToDoInput] = useState("");
  const[inputArray, setInputArray] = useState([]);

  function getInputData(event){
    setToDoInput(event.target.value)
  }

  function makeArrayData() {
    setInputArray(prevArray => [...prevArray, toDoInput])
    setToDoInput("")
  }

  function listClick(event) {
    let id = event.target.id;
    setInputArray(prevArray => prevArray.filter((value, index) => {
      console.log(`index: ${index}  type: ${typeof(index)}`);
      console.log(`id: ${id}  type: ${typeof(id)}`);
      return index != id
    } ))
  }
  console.log(inputArray)

  return ( 
    <div>
      <h1>ToDoList</h1>
      <InputContext.Provider value ={{realTimeValue: toDoInput, array: inputArray}}>
      <Input 
      pGetInputData = {getInputData}
      />
      <Button 
      pMakeArrayData = {makeArrayData}
      />
      <ItemList 
      pListClick = {listClick}
      />
      </InputContext.Provider>
    </div>
  )
}

export default App;