import { useState } from "react";

function ListInput(props) {
  const [listItem, setListItem] = useState("");

  const submitListItem = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      props.handleListInput(listItem);
      setListItem("");
    }
  };

  return (
    <div>
      <input
        className="input-field"
        placeholder="add list item"
        value={listItem}
        onChange={(e) => setListItem(e.target.value)}
        onKeyPress={(e) => submitListItem(e)}
      ></input>
    </div>
  );
}

export default ListInput;