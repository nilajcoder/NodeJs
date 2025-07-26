const express = require('express');
const route1 = require('./route/route');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("this is path information",(req));
    next();
}); 


app.use((req, res, next) => {
  console.log(`Path: ${req.path}, Method: ${req.method}`);
  next();
});

app.use("/hi",route1 )

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//http://localhost:3000/hi/first   url to access the first controller response
//http://localhost:3000/   url to access the hello world response