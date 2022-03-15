import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import './App.css'
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([])


  useEffect(() => {
    const json = localStorage.getItem("notes");
    const loadedNotes = JSON.parse(json);
    if (loadedNotes) {
      setNotes(loadedNotes);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(notes);
    localStorage.setItem("notes", json);
  }, [notes]);



  const addNote = (newNote) => {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  const deleteNotes = (id) => {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => 
          index !== id)]
    })
  }
 
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index) => (
         <Note 
            key={index}
            id={index} 
            title={note.title} 
            content={note.content} 
            onDelete={deleteNotes}
          />
      ))}
      <Footer />
    </div>
  );
}

export default App;
