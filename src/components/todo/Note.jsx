import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, note, title, deleteNote, createdAt }) {
  function handleClick() {
    deleteNote(id);
  }

  return (
    <div
      className="rounded-lg shadow-xl bg-transparent border text-white font-mono w-72 sm:w-96"
     
    >
      <div className="border-b border-gray-800 px-8 py-3">
        <div
          className="w-6 h-6 rounded-full bg-red-500 cursor-pointer flex items-center justify-center"
          onClick={handleClick}
        >
          <div className="w-4 h-1 bg-white transform rotate-45 absolute"></div>
          <div className="w-4 h-1 bg-white transform -rotate-45 absolute"></div>
        </div>{" "}
      </div>
      <div className="px-8 py-6">
        <p>
          <em className="text-blue-400">const</em>{" "}
          <span className="text-green-400">Todo</span>{" "}
          <span className="text-pink-500">=</span>{" "}
          <em className="text-blue-400">function</em>() {"{"}
        </p>
        <p>
          &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;title:{" "}
          <span className="text-yellow-300">{title}</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;note:{" "}
          <span className="text-yellow-300">{note}</span>,
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;date:{" "}
          <span className="text-yellow-300">{createdAt}</span>,
        </p>
        <p>&nbsp;&nbsp;{"}"}</p>
        <p>{"}"}</p>
      </div>
    </div>
  );
}

export default Note;
