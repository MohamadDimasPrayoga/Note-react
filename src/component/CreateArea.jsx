/* eslint-disable react/prop-types */
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        )}
        <textarea
        onClick={expand}
          name="content"
          rows={isExpanded ? 3 : 1}
          value={note.content}
          placeholder="Take a note..."
          onChange={handleChange}
        ></textarea>
        <button onClick={addNote}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
