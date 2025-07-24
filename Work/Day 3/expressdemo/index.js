const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// ✅ Query Parameters Example
// Accessed via: http://localhost:3000/search?name=John&age=25
app.get('/search', (req, res) => {
  const { name, age } = req.query;
  res.send(`Query Parameters - Name: ${name}, Age: ${age}`);
});

// ✅ Route Parameter Example
// Accessed via: http://localhost:3000/user/101
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Route Parameter - User ID: ${userId}`);
});

// ✅ Request Body Example
// Send a POST request to /login with JSON: { "email": "a@example.com", "password": "12345" }
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email);
  console.log("Password:", password);
  res.send(`Request Body - Email: ${email}, Password: ${password}`);
});

// ✅ JSON Response Example
app.get('/data', (req, res) => {
  const userdata = {
    id: 1,
    name: "Dev",
    email: "Dev@gmail.com"
  };
  res.json({
    status: true,
    data: userdata
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
