import { useState } from "react";

function ListItem(props) {
  const [listItemEdit, setListItemEdit] = useState(props.edit);
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div className="list-item">
        <input
          name="checkbox"
          onChange={(e) => props.changeListItem(e)}
          checked={props.completed}
          className="checkbox"
          type="checkbox"
        ></input>

        {listItemEdit ? (
          <input
            autoFocus
            name="list"
            spellCheck="false"
            className="change-input"
            onChange={(e) => props.changeListItem(e)}
            onBlur={() => setListItemEdit(!listItemEdit)}
            onKeyUp={(e) =>
              e.key === "Enter" ? setListItemEdit(!listItemEdit) : null
            }
            value={props.item}
          ></input>
        ) : (
          <li
            onClick={() => setListItemEdit(!listItemEdit)}
            className={`list-item-text ${
              props.completed ? "checked" : undefined
            }`}
          >
            {props.item}
          </li>
        )}

        {mouseHover ? (
          <button
            className="delete-checklist-button"
            onClick={props.deleteListItem}
          >
            x
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ListItem;