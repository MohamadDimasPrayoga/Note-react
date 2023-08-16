/* eslint-disable react/prop-types */
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
        return{
            ...prevNote,
            [name]: value
        }
    });
  }

  function addNote(){
    props.onAdd(note);
    setNote({
        title: "",
        content: ""
    })
    event.preventDefault();//agar layar tidak berkedip saat diklik
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          rows="3"
          value={note.content}
          placeholder="Take a note..."
          onChange={handleChange}
        ></textarea>
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
