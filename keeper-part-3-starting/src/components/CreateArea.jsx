import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange = {props.pTitleOnChange} name="title" placeholder="Title" />
        <textarea onChange = {props.pContentOnChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick = {props.pOnClick} type = "button">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
