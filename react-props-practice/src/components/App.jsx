import React from "react";
import Card from "./Card";
import Header from "./Header";
import contacts from "../contacts";

function loopCard(contact) {
  return <Card 
  key = {contact.id}
  keyvalue = {contact.id}
  name = {contact.name}
  phone = {contact.phone}
  email = {contact.email}
  imgURL = {contact.imgURL}
  />
};


function App() {
  return (
    <div>
      <Header />
      {contacts.map(loopCard)}
      {/* <Card 
      name = {contacts[0].name}
      phone = {contacts[0].phone}
      email = {contacts[0].email}
      imgURL = {contacts[0].imgURL}
      />
      <Card 
      name = {contacts[1].name}
      phone = {contacts[1].phone}
      email = {contacts[1].email}
      imgURL = {contacts[1].imgURL}
      />
      <Card 
      name = {contacts[2].name}
      phone = {contacts[2].phone}
      email = {contacts[2].email}
      imgURL = {contacts[2].imgURL}
      /> */}
    </div>
  );
}



export default App;
