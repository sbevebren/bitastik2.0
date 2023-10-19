import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({addNote}) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    note: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
 addNote({
   title:note.title,
   note:note.note
  })
  setNote({
        title: "",
        note: "",
      });
      event.preventDefault();
     

}

  function expand() {
    setExpanded(true);
  }

  return (
<div>
  <form className="create-note bg-gray-900 rounded-lg shadow-md p-4 w-60 m-auto">
    {isExpanded && (
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="w-full mb-2 p-2 border border-gray-800 rounded-md focus:outline-none focus:ring focus:border-black bg-gray-900"
      />
    )}

    <textarea
      name="note"
      onClick={expand}
      onChange={handleChange}
      value={note.note}
      placeholder="Take a note..."
      rows={isExpanded ? 3 : 1}
      className="w-full mb-2 p-2 border border-gray-800 rounded-md focus:outline-none focus:ring focus:border-black bg-gray-900"
    />

    <Zoom in={isExpanded}>
      <Fab
        onClick={submitNote}
        className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md "
      >
        <AddIcon />
      </Fab>
    </Zoom>
  </form>
</div>


  );
}

export default CreateArea;
