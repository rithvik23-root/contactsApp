import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddContactForm from "./components/AddContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/contacts`, {
        params: { query },
      });
      setContacts(response.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [query]);

  return (
    <div>
      <h1>Contact List Manager</h1>
      <AddContactForm fetchContacts={fetchContacts} />

    </div>
  );

}

export default App;
