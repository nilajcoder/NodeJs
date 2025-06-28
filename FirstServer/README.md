# Simple Node.js HTTP Server

This is a basic Node.js project that creates an HTTP server using the built-in `http` module. The server responds differently based on the URL requested.

# http
In Node.js, http is a built-in core module that allows you to create and manage an HTTP server.
You don't need to install it separately with npm — it's available by default in Node.js.

✅ What is http in Node.js?
The http module lets you create web servers that can listen for incoming requests and send back responses.

It's based on the HyperText Transfer Protocol (HTTP) — the foundation of data communication on the web.


## 📁 File: `server.js`



# 🚀 How to Run
Make sure you have Node.js installed.

Save the code in a file named server.js.

Open your terminal and run:

node server.js



Open your browser and visit:

http://localhost:3000 for the home route.

http://localhost:3000/about for the about page.

Any other route will show Not found.

# 📄 Output
/ → Hello programmers!How are you doing?

/about → This is about us page

any other path → Not found

# 📌 Notes
This server runs on port 3000.


# 🧠 What does it provide?
http.createServer() – creates a new HTTP server.

req – short for "request", it represents the incoming request (like URL, method, headers).

res – short for "response", it lets you send data back to the client.

# 🛠 Common Use Cases
Build basic servers without using frameworks like Express.js.

Handle routing manually.

Understand how the web works at a low level.



It's a simple demonstration of routing with plain Node.js (no frameworks like Express).




