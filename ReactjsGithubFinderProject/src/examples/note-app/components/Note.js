import React, {useContext} from 'react'
import NotesContext from '../context/notes-context'


const Note = ( {note} ) => {
    const {dispatch} = useContext(NotesContext)


    return (
        <tr key={note.title}>
            <td>{note.title}</td>
            <td>{note.body}</td>
            <td>
                <button onClick={()=> dispatch({type: 'REMOVE_NOTE', title: note.title}) } className="btn btn-sm btn-danger float-right">
                    <i className="fas fa-times"></i>
                </button></td>
        </tr> 
    )  
}


export default Note;


