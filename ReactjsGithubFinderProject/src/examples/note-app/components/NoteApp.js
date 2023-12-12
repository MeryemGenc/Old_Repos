import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList'
import NotesContext from '../context/notes-context'



const NoteApp = () =>{
    //kullanılan reducer (state,action) ister:
    const [notes, dispatch] = useReducer(notesReducer,[]);
    
    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'));
        if (notesData) {
            dispatch({type: 'POPULATE_NOTES', notes: notesData});
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    }, [notes])


    return (
        //NotesContext.Provider taglerinin içerisinde tanımlanan componentlerin hepsi "value" ya erişme hakkına sahip olur.Böylece her componente tek seferde erişim verilir.
        <NotesContext.Provider value={{notes, dispatch}}>
            <div className="container p-5">
                <div className="card mb-3">
                    <div className="card-header">Notes</div>
                    {
                        notes && (
                            <table className="table table-sm table-striped mb-0">
                                <tbody>
                                    {
                                        <NoteList />
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="card mb-3">
                    <div className="card-header">Add A New Note</div>
                    <div className="card-body">

                        <AddNoteForm />

                    </div>
                </div>
            </div>
        </NotesContext.Provider>
    )

} 



export default NoteApp;
