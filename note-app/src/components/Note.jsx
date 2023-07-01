import { useState } from "react";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import "../assets/stylesheets/Note.css";

function Note(props) {
  const { id, title, note, list, project, date } = props.note;
  const [titleEdit, setTitleEdit] = useState(props.edit);
  const [noteEdit, setNoteEdit] = useState(props.edit);
  const [projectEdit, setProjectEdit] = useState(props.edit);
  const [dateEdit, setDateEdit] = useState(props.edit);
  const [mouseHover, setMouseHover] = useState(false);

  const submitChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    props.changeNoteField(value, field, id);
  };

  return (
    <div
      className="note-wrapper"
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      {mouseHover ? (
        <button className="delete-button" onClick={() => props.deleteNote(id)}>
          x
        </button>
      ) : null}

      {/* TITLE */}
      <div>
        {!title || titleEdit ? (
          <input
            autoFocus
            name="title"
            placeholder="Title"
            onChange={(e) => submitChange(e)}
            onBlur={() => setTitleEdit(!titleEdit)}
            onKeyUp={(e) =>
              e.key === "Enter" ? setTitleEdit(!titleEdit) : null
            }
            value={title}
            spellCheck="false"
            className="change-input title-edit"
          ></input>
        ) : (
          <h2
            onClick={() => setTitleEdit(!titleEdit)}
            className="note-title"
            data-testid="title"
          >
            {title}
          </h2>
        )}
      </div>

      {/* NOTE */}
      {noteEdit || !note ? (
        <textarea
          autoFocus
          // sets autoFocus to end of text
          onFocus={(e) => {
            var val = e.target.value;
            e.target.value = "";
            e.target.value = val;
          }}
          name="note"
          placeholder="add a note..."
          value={note}
          onChange={(e) => submitChange(e)}
          onBlur={() => setNoteEdit(!noteEdit)}
          className="change-input note-input"
          spellCheck="false"
        />
      ) : (
        <div className="">
          <p
            className="note-text"
            data-testid="note"
            onClick={() => setNoteEdit(!noteEdit)}
          >
            {note}
          </p>
        </div>
      )}

      {/* LIST */}
      {list &&
        list.map((item) => (
          <ListItem
            deleteListItem={() => props.deleteListItem(id, item.id)}
            edit={false}
            changeListItem={(e) => props.changeListItem(e, id, item.id)}
            completed={item.completed}
            key={item.id}
            item={item.name}
          />
        ))}

      <ListInput handleListInput={(value) => props.addListItem(value, id)} />

      <div className="note-bottom">
        {!project || projectEdit ? (
          <input
            className="project bottom-tag"
            data-testid="project"
            placeholder="project"
            name="project"
            value={project}
            onBlur={() => setProjectEdit(!projectEdit)}
            onKeyDown={(e) => e.key === "Enter" && setProjectEdit(!projectEdit)}
            onChange={(e) => submitChange(e)}
          ></input>
        ) : (
          <p
            className="project bottom-tag"
            data-testid="project"
            onClick={() => setProjectEdit(!projectEdit)}
          >
            {project}
          </p>
        )}

        {!date || dateEdit ? (
          <input
            className="project bottom-tag"
            data-testid="date"
            id="due-date"
            type="date"
            name="date"
            value={date}
            onMouseLeave={() => setDateEdit(!dateEdit)}
            onChange={(e) => submitChange(e)}
          ></input>
        ) : (
          <p
            className="project bottom-tag"
            data-testid="date"
            id="due-date"
            onClick={() => setDateEdit(!dateEdit)}
          >
            {date}
          </p>
        )}
      </div>
    </div>
  );
}

export default Note;