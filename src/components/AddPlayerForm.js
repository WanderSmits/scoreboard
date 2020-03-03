// src/components/AddPlayerForm.js
import React, { useState } from "react";
export default function AddPlayerForm(props) {
  const [name, set_name] = useState(""); //

  const addNewPlayer = event => {
    event.preventDefault();
    props.addPlayer(name);
    set_name("");
  };
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          value={name} //state, nothing changes when you type because its default ""
          type="text"
          placeholder="Name"
          onChange={event => {
            // event listener and handler, so users can type in input field
            set_name(event.target.value); //onchange set the name, target naar value={name}
          }}
        />{" "}
        <button onClick={addNewPlayer}>Add</button>
      </p>
    </div>
  );
}
