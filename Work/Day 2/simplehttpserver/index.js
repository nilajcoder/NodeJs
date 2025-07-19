// server() http.createServer() callback
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a local server to receive data from
const server = http.createServer((req, res) => {

    let route = req.url;

    if (route == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const aboutHtml = path.join(__dirname, 'files', 'about.html');
        const data = fs.readFileSync(aboutHtml, 'utf8');
        res.end(data);
    } else if (route == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
         const aboutHtml = path.join(__dirname, 'files', 'contact.html');
        const data = fs.readFileSync(aboutHtml, 'utf8');
        res.end(data);
    } 
    
    else if (route == '/image') {
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        const imagePath = path.join(__dirname, 'files', 'image.jpg');
        const image = fs.readFileSync(imagePath);
        res.end(image);

    }

    else if (route == '/csv') {
        res.writeHead(200, { 'Content-Type': 'text/csv' });
        const csvPath = path.join(__dirname, 'files', 'data.csv');
        const csv = fs.readFileSync(csvPath, 'utf8');
        res.end(csv);

    }

    else if (route == '/pdf') {
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        const pdfPath = path.join(__dirname, 'files', 'pdf.pdf');
        const pdf = fs.readFileSync(pdfPath);
        res.end(pdf);

    }
    
    else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: "This is home page"
        }));
    }
});

server.listen(8000, () => {
    console.log("Server is running at 8000");
});
