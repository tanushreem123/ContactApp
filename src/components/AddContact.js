import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are Mandatory!");
      return;
    }
    props.addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/"); // Replace "/" with your desired route
  };

  return (
    <div className="ui main">
      <h2 className="center aligned">Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add Contacts</button>
      </form>
    </div>
  );
}

export default AddContact;
