# Express.js API Example

This is a simple Express.js application that demonstrates how to use route parameters, query parameters, request body parsing, and JSON responses.

## 🛠️ Setup Instructions

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository or copy the code to your local machine.
3. Install dependencies:  npm install express

## Start the server:


node index.js
The server will run at http://localhost:3000.



## 📌 API Endpoints
## ➤ GET /
Returns a simple "Hello World!" message.


## ➤ GET /search?name=John&age=25
Demonstrates query parameter usage.

Example:

http://localhost:3000/search?name=John&age=25
Response:

Query Parameters - Name: John, Age: 25
## ➤ GET /user/:id
Demonstrates route parameter usage.

http://localhost:3000/user/101
Response:


Route Parameter - User ID: 101
## ➤ POST /login
Accepts JSON in the request body.

Request Body:


{
  "email": "a@example.com",
  "password": "12345"
}
Response:


Request Body - Email: a@example.com, Password: 12345
## ➤ GET /data
Returns a JSON object.

Response:


{
  "status": true,
  "data": {
    "id": 1,
    "name": "Dev",
    "email": "Dev@gmail.com"
  }
}
## ❓ FAQ
## 1. How do I send a POST request to /login?
Use a tool like Postman or curl:


curl -X POST http://localhost:3000/login \
 "Content-Type: application/json" \
'{"email": "test@example.com", "password": "12345"}'
## 2. What does req.query mean?
req.query is used to access query string parameters like /search?name=John.

## 3. How is req.params different from req.query?
req.params is used for route parameters like /user/101

req.query is used for query string values like /search?name=John

## 4. How do I test the API endpoints?
Use:

Browser for GET requests with query/route parameters

Postman or curl for POST requests

## 5. Why use express.json()?
It allows Express to parse JSON-formatted request bodies, necessary for POST routes like /login.

