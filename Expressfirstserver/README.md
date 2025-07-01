# Express.js Basic Server

This is a simple Node.js and Express.js server that handles basic `GET` and `POST` requests on the root route (`/`).

---

# Create package.json

npm init or npm -y

## 📁 Project Structure

project/
│
├── server.js # Main server file
├── package.json # Project metadata and dependency


# To install Express and save it:

npm i express

# What is Express

Express is a minimal and flexible web framework for Node.js that simplifies building web applications and APIs.

It provides a thin layer of fundamental features such as:

Routing

Middleware support

HTTP request/response handling

Template rendering

Error handling

# What is nodemon 

nodemon is a tool that automatically restarts your Node.js application whenever you make changes to the source code.

It helps speed up development by removing the need to manually stop and restart the server after each change.


# Explanation 

const express = require('express');

 Imports the Express module.


const app = express();
What it does: Creates an Express application instance.

Why: This app object will be used to define routes, handle requests, and configure the server.



app.get('/', (req, res) => {
  res.send('This is home page');
});

 **What it does**: Defines a route that handles **GET requests** to the root URL `/`.
- **`req`**: Represents the incoming request object (e.g., headers, query params).
- **`res`**: Represents the response object used to send data back.
- **`res.send(...)`**: Sends a plain text response `"This is home page"` to the client.

app.post('/', (req, res) => {
  res.send('This is home page with post request');
});

What it does: Defines a route for POST requests to the same / URL.

Useful when a client (like a form or API tool like Postman) sends data to the server.

Sends a text response for POST: "This is home page with post request".



app.listen(3000, () => {
  console.log('listening on port 3000');
});

- **What it does**: Starts the server and tells it to listen on port 3000.
- When the server starts successfully, it logs: `"listening on port 3000"`.

---

### ✅ Summary:
This code:
- Sets up a basic Express server
- Responds to both `GET` and `POST` requests on `/`
- Runs on port 3000
