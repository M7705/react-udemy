import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "", 
    lname: "",
    email: ""
  });

  function changeHandler(event) {
    let targetName = event.target.name;
    let targetValue = event.target.value;
    
    if (targetName === "fname") {
      setContact(
        {
          fname: targetValue,
          lname: contact.lname,
          email: contact.email
        }
      )
    }
    else if (targetName === "lname") {
      setContact(
        {
          fname: contact.fname,
          lname: targetValue,
          email: contact.email
        }
      )
    }
    else {
      setContact(
        {
          fname: contact.fname,
          lname: contact.lname,
          email: targetValue
        }
      )
    }

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange = {changeHandler}
          name="fname"
          placeholder="First Name"
        />
        <input
          onChange = {changeHandler}
          name="lname"
          placeholder="Last Name"
        />
        <input
          onChange = {changeHandler}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
