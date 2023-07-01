import React, { useState } from "react";
import uniqid from "uniqid";
import ListInput from "./ListInput";
import "../assets/stylesheets/Form.css";

function Form(props) {
  const [display, setDisplay] = useState(props.display);
  const initialState = {
    id: uniqid(),
    title: "",
    note: "",
    list: [],
    date: "",
    project: "",
  };
  const [note, setNote] = useState(initialState);

  const resetForm = () => {
    setNote(initialState);
  };

  const handleChange = ({ target: { name, value } }) => {
    setNote({ ...note, [name]: value });
  };

  const handleListInput = (value) => {
    let newNote = { ...note };
    newNote.list = [
      ...newNote.list,
      { name: value, completed: false, id: uniqid() },
    ];
    setNote(newNote);
  };

  const handleSubmit = () => {
    setDisplay(false);
    if (note.note !== "" || note.list.length !== 0) {
      props.handleForm(note);
    }
    resetForm();
  };

  return (
    <div className="form-wrapper">
      <div className="form">
        {display ? (
          <input
            className="input-field title-input"
            placeholder="Title"
            name="title"
            value={note.title}
            aria-label="title-input"
            onChange={(e) => handleChange(e)}
          ></input>
        ) : null}

        <textarea
          className="input-field"
          id="note-input"
          placeholder="Take a note..."
          name="note"
          value={note.note}
          aria-label="note-input"
          onClick={() => setDisplay(true)}
          onChange={(e) => handleChange(e)}
        ></textarea>

        {display ? (
          <ListInput handleListInput={(value) => handleListInput(value)} />
        ) : null}

        {note.list.map((item) => (
          <li className="temporary-form-list-item" key={uniqid()}>
            {item.name}
          </li>
        ))}

        {display ? (
          <div id="form-bottom-input">
            <input
              type="date"
              className="input-field"
              id="due-date-input"
              aria-label="date-input"
              value={note.date}
              name="date"
              onChange={(e) => handleChange(e)}
            ></input>{" "}
            <input
              className="input-field"
              id="project-input"
              placeholder="project"
              aria-label="project-input"
              value={note.project}
              name="project"
              onChange={(e) => handleChange(e)}
            ></input>{" "}
            <button
              aria-label="add-button"
              id="add-button"
              onClick={handleSubmit}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Form;