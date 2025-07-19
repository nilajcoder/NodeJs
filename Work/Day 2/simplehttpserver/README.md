### 1️⃣ What is the purpose of this project?
→ To create a simple Node.js HTTP server that serves different file types based on route requests.

npm init 

### 2️⃣ Which Node.js core modules are used in this project?

http — To create the HTTP server

fs — To read files from the filesystem

path — To handle file paths

url — To resolve URL paths (via fileURLToPath and dirname)

### 3️⃣ What routes are handled by this server?

/about — Returns about.html as an HTML page

/contact — Returns contact.html as an HTML page

/image — Returns image.jpg as an image file

/pdf — Returns pdf.pdf as a PDF file

Any other route — Returns a JSON response (default)

### 4️⃣ What are the MIME types used in the server responses?

text/html — For HTML pages

image/jpg — For image files

application/pdf — For PDF files

application/json — For JSON responses

### 5️⃣ On which port does the server run?
→ Port 8000

http://localhost:8000/contact
http://localhost:8000/about
http://localhost:8000/pdf
http://localhost:8000/image
http://localhost:8000


### 6️⃣ How to start the server?


node index.js
### 7️⃣ What should be the folder structure?

/project-root
 ├── files/
 │    ├── about.html
 │    ├── contact.html
 │    ├── image.jpg
 │    └── pdf.pdf
 └── index.js
### 8️⃣ What happens if the requested file is missing?
→ Currently, the server will throw an error if a file is missing.
(Optional enhancement: add error handling for missing files.)

### 9️⃣ Is this server production-ready?
→ No, this is for learning/demo purposes. For production, use Express.js with proper error handling and security middleware.

### 10️ How can this project be extended?

Serve other file types like CSV, JSON, CSS, JS

Add dynamic routing

Use Express.js for cleaner routing

Add content-type detection dynamically

## 11 What is the role of fileURLToPath(import.meta.url) in this project?
→ It converts the module URL into a local file path, so we can get the correct __filename in ES Modules.

## 12️ Why do we use dirname(__filename)?
→ To get the absolute directory path of the current file, since __dirname is not available in ES Modules by default.

## 13️ What will happen if a user requests an undefined route?
→ The server responds with a JSON message:

{
  "data": "This is home page"
}

## 14️ What is the difference between fs.readFileSync() and fs.readFile()?
→ fs.readFileSync() is blocking (synchronous) — the server waits until the file is read.
→ fs.readFile() is non-blocking (asynchronous) — preferred for production servers.

## 15 Why is the Content-Type header important in HTTP responses?
→ It tells the browser how to handle the response data (e.g., render HTML, display image, download PDF).

## 16️ What happens if you remove res.writeHead() from the response?
→ The browser may not interpret the file correctly because the content type is missing.

## 17 What is the default behavior of http.createServer() callback function?
→ It executes for every incoming request with req (request) and res (response) objects.

## 18️ What is the role of res.end() in Node.js HTTP server?
→ It signals the end of the HTTP response. Without it, the client will keep waiting.

## 19️ Why is this called a 'local server'?
→ Because it's running on your machine (localhost:8000), not deployed on the internet.

## 20️ How would you make this server handle asynchronous file reading?


fs.readFile(filePath, (err, data) => {
  if (err) {
    res.writeHead(404);
    res.end('File not found');
  } else {
    res.writeHead(200, { 'Content-Type': '...' });
    res.end(data);
  }
});

### 21 How would you deploy this server for public access?
→ Use a hosting provider (e.g., Heroku, Render, Railway) and open the correct port with public access.

## 22️ What are some limitations of this HTTP server?

No dynamic routing

No error handling for missing files

Synchronous blocking I/O

No middleware or security features

## 23️ What is the difference between this and using Express.js?
→ Express.js simplifies routing, adds middleware support,
 handles errors better, and provides more flexibility for production apps.

## 24️ How would you handle large files like videos or big PDFs?
→ Use streams with fs.createReadStream() instead of fs.readFileSync()

## 25️ What would be a good enhancement for file serving?

Use MIME type detection libraries (like mime-types)

Implement logging middleware

Serve files asynchronously with streams

Add error handling



### Node.js Watch Mode Example
📝 Description
This project demonstrates how to run a Node.js script in watch mode, which automatically restarts the app when files change.
Useful for development and testing purposes.

### package.json type-module 
node --watch index.js


