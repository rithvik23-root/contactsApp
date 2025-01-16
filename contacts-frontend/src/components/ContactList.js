import React from "react";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact._id}>
          {contact.name} ({contact.email})
          <button onClick={() => onDeleteContact(contact._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
