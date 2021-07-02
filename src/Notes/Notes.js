import Note from "./Note/Note";

const Notes = ({ notesArr }) => {
    return (
        <div id='notes'>
            {
                notesArr.map(item => <Note id = {item}/>)
            }
        </div>
    )
}

export default Notes;