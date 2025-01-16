# Contact List Manager

## Overview
A simple web application to manage contacts. Users can add, search, and delete contacts dynamically. The application is built with a Node.js backend, MongoDB for storage, and a React frontend for user interaction.

---

## Features
- **Add Contact**: Input a name and email to add a new contact.
- **View Contacts**: Display a list of all contacts.
- **Search Contacts**: Search by name or email with dynamic results.
- **Delete Contact**: Remove a contact from the list.

---

## Setup and Run Instructions

### Prerequisites
- **Node.js**: Ensure Node.js is installed ([Download Node.js](https://nodejs.org/)).
- **MongoDB**: Install MongoDB and ensure it is running locally.

### Backend (Node.js + Express)
1. Navigate to the backend directory:
   ```bash
   cd contactsAppBackend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure MongoDB connection:
   - Update the connection string in `server.js`:
     ```javascript
     mongoose.connect('mongodb://localhost:27017/contacts', {
       useNewUrlParser: true,
       useUnifiedTopology: true
     });
     ```
   - Replace `localhost:27017` with your MongoDB connection string if using a remote database.
4. Start the server:
   ```bash
   node server.js
   ```
   The server will run at `http://localhost:5000`.

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd contacts-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000`.

---

## Approach

### Architecture
- **Backend**: Built with Express.js for API routes and MongoDB for storing contact information.
- **Frontend**: Built with React to create a dynamic and responsive user interface.

### Key Design Decisions
1. **Dynamic Search**:
   - The backend uses regex-based querying to allow partial, case-insensitive search by name or email.
   - Trade-off: Regex queries can be less performant on large datasets but are simple to implement for small-scale apps.

2. **Separation of Concerns**:
   - The backend and frontend are decoupled, making the application easier to maintain and scale.

3. **Error Handling**:
   - Both the backend and frontend include basic error handling for missing inputs, server errors, and duplicate entries.

4. **Styling**:
   - CSS is used for a clean and simple UI. It ensures maintainability without the overhead of heavy libraries.

---

## Trade-offs
1. **Database**:
   - Chose MongoDB for its flexibility and simplicity.
   - Trade-off: A relational database might have been more efficient for highly structured data.

2. **Testing**:
   - Basic testing was omitted due to time constraints. Jest or Mocha could be added for unit and integration testing.

3. **Features**:
   - Bonus features like pagination or advanced search filtering were not implemented but could be added easily.
---

