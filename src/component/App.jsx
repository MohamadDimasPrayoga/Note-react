/* eslint-disable react/jsx-key */
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea"
import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([]);

  function submitNote(newNote){
    setNotes(prevNotes =>{
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id
      })
    })
  }
  
  return (
    <div>
     <Header />
     <CreateArea onAdd={submitNote}/>
     {notes.map((noteItem, index) => {
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
     })}
      <Footer />
    </div>
  )
}

export default App
