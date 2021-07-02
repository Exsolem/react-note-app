import './App.css';
import Notes from "./Notes/Notes";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function App() {
    return (
        <div className="App">
            <h1>Notes</h1>
            {
                <Notes notesArr={ arr }/>
            }
            <form id="editForm">
                <input type="text" id="editNoteName" placeholder="Note name" required/>
                <label htmlFor="editNoteCategory">Note category:</label>
                <select name="category" id="editNoteCategory">
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                </select>
                <input type="text" id="editNoteContent" placeholder="Content" required/>
                <input type="date" id="editNoteDate"/>
                <button id="editNote" type="submit">Edit Note</button>
            </form>
            <h1>Archived Notes</h1>
        </div>
    );
}

export default App;
