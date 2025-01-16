import React, { useState } from "react";
import axios from "axios";

const AddContactForm = ({ fetchContacts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Both name and email are required!");
      return;
    }
    try {
      await axios.post("http://localhost:5000/contacts", { name, email });
      fetchContacts();
      setName("");
      setEmail("");
    } catch (err) {
      alert("Error adding contact: " + err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
