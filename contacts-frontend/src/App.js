import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch contacts from the server
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contacts", {
        params: { query: searchTerm }, // Send search term as query
      });
      setContacts(response.data); // Update state with fetched contacts
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  // Add a new contact
  const addContact = async (name, email) => {
    try {
      await axios.post("http://localhost:5000/contacts", { name, email });
      fetchContacts(); // Refresh the contact list
    } catch (err) {
      console.error("Error adding contact:", err.response?.data?.message || err);
      alert('Error Adding contact')
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      fetchContacts(); // Refresh the contact list
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  // Handle search term updates
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fetch contacts whenever searchTerm changes
  useEffect(() => {
    fetchContacts();
  }, [searchTerm]);

  return (
    <div className="container">
      <h1>Contact List Manager</h1>

      {/* Add Contact Form */}
      <div>
        <h2>Add Contact</h2>
        <ContactForm onAddContact={addContact} />
      </div>

      {/* Search Bar */}
      <div>
        <h2>Search Contacts</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Contact List */}
      <div>
        <h2>Contact List</h2>
        <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default App;
