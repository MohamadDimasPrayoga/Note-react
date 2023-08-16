/* eslint-disable react/prop-types */
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function klikDelete(){
    props.onDelete(props.id)
    }
    return(
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={klikDelete}><DeleteIcon /></button>
    </div>
    );
}

export default Note;