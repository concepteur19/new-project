import React from "react";
import Header from "./Hearder";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../note.js";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note 
          key={note.key} 
          title={note.title} 
          content={note.content} 
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;