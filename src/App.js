import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"First note!",
      date:"10/6/2022"
    },
    {
      id: nanoid(),
      text:"New note!",
      date:"10/6/2022"
    }
  ]);

  const [searchText, setSearchText] = useState('');


  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes])

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()

    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (<div className='container'>
    <Search handleSearchNote={setSearchText} />
    <NotesList 
    notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
    handleAddNote={AddNote}
    handleDeleteNote={deleteNote}
    />
  </div>
  );
};

export default App;
