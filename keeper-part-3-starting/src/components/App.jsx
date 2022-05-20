import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [realTimeMemo, setRealTimeMemo] = useState({title:"", content:""})
  const [noteArray, setNoteArray] = useState([])

  function handlePTitleOnChange(event) {
    let value = event.target.value
    setRealTimeMemo(prevObject => {return {...prevObject, title: value}})
  }


  console.log(realTimeMemo)

  function handlePContentOnChange(event) {
    let value = event.target.value
    setRealTimeMemo(prevObject => {return {...prevObject, content: value}})
  }

  function handleOnClick() {
    setNoteArray(prevArray => [...prevArray, realTimeMemo])
  }

  console.log(noteArray);

  return (
    <div>
      <Header />
      <CreateArea
      pTitleOnChange = {handlePTitleOnChange}
      pContentOnChange = {handlePContentOnChange}
      pOnClick = {handleOnClick}
      />
      <Note key={1} myNoteArray = {noteArray}  />
      <Footer />
    </div>
  );
}

export default App;
