import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h2 className="noteTitle">{props.title}</h2>
      <p className="noteText">{props.text}</p>
      <div onClick={() => props.deleteFunction(props.id)}
        className="deleteButton"><DeleteIcon /></div>
    </div>
  );
}

export default Note;
