import React from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from '../emojipedia';

// function loopEmojipedia(emojiitem) {
//   return (
//     <Entry 
//     key = {emojiitem.id}
//     emoji = {emojiitem.emoji}
//     name = {emojiitem.name}
//     meaning = {emojiitem.meaning}
//     />
//   )
// }


function App() {
  return (
    <>
    <Header />
    <dl className="dictionary">
    {emojipedia.map(x => (
    <Entry 
    key = {x.id}
    emoji = {x.emoji}
    name = {x.name}
    meaning = {x.meaning}
    />
  )) }
    </dl>
    </>
  );
}

export default App;