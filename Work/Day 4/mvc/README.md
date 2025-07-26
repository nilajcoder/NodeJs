### Q: What is middleware in Express.js and how is it useful?


Answer : Middleware is a function in Express.js that processes the request before it reaches the final route handler. It can modify the request and response objects or end the request/response cycle. It's useful for tasks like logging, authentication, parsing, and error handling.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

## Url https://expressjs.com/en/guide/using-middleware.html 

## 🔁 Middleware Function Signature

function middleware(req, res, next) {
  // your logic here
  next(); // pass control to next middleware
}
This is a custom middleware function using app.use() 

in Express.js. It runs on every incoming request to your server.

req: The Request object (contains info like URL, method, headers, body, etc.)

res: The Response object (used to send data back to the client)

next(): A function you must call to move on to the next middleware or route handler

## Q: What does next() do in Express middleware?

A: next() is a function that passes control to the next middleware in the stack. If you forget to call it, the request will hang and never complete.


### 🎯 Purpose of Middleware


Logging	          Log every request made to the server
Authentication	   Verify user tokens before processing
Body Parsing	   Convert request body to JSON
Error Handling	   any errors in the app
Routing Control 	Block or allow requests



### 🧱 Types of Middleware

Application-level middleware — bound to an instance of Express

Router-level middleware — bound to an Express Router

Built-in middleware — like express.json(), express.static()

Error-handling middleware — has 4 parameters (err, req, res, next)

Third-party middleware — like morgan, cors, body-parser



### Q: What is Authentication in web development?

A: Authentication is the process of verifying a user's identity. It ensures that the person trying to access the system is who they claim to be. It is typically done through login credentials like username and password, or via tokens in APIs.