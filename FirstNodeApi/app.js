const express = require('express');
const app = express ();
app.use(express.json());
const port=3000;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });
  app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

 /*
 post method
 */
 app.post("/signup", (request, response) => {
 
   const { username, password } = request.body;
   

   response.json({ message: "Signup successful" });
});

/*
get the data in json format
*/
app.get("/signup", (request, response) => {
 
   const jsondata = request.body;
   response.send({ jsondata });
});
