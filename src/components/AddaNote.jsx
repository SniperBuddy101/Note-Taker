import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function AddaNote(props) {
  const [task, changeTask] = React.useState({ title: "", taskText: "" });

  function onTaskTextChange(event) {
    const newValue = event.target.value;
    const fieldName = event.target.name;
    changeTask((prevValue) => {
      return { ...prevValue, [fieldName]: newValue };
    });
  }

  const [isHighlighted, changeHighlight] = React.useState(false);

  function onSubmit(event) {
    props.changeNoteList((prevValue) => {
      return [...prevValue, task];
    });
    changeTask({ title: "", taskText: "" });
    event.preventDefault();
  }

  return (
    <div className="addNoteSection">
      <div className="inputSection">
        <form id="taskForm" onSubmit={onSubmit}>
          {isHighlighted && (
            <input
              className="inputField"
              required
              type="text"
              name="title"
              placeholder="Enter the title"
              value={task.title}
              onChange={onTaskTextChange}
            />
          )}
          <textarea
          onClick={()=> changeHighlight(true)}
            required
            className="inputField"
            onChange={onTaskTextChange}
            value={task.taskText}
            name="taskText"
            rows={isHighlighted ? "4" : "1"}
            cols="50"
            placeholder="Enter the task"
          />
        </form>
      </div>
      <Zoom in={isHighlighted}>
        <Fab form="taskForm" type="submit">
          <AddCircleOutlineIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default AddaNote;
