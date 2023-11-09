const express = require('express');
const app = express ();
app.use(express.json());
const port = 3000; 
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });
/*
get method
*/
  app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

 /*
 post method for sign in
 */
 app.post("/signup", (request, response) => {
 
   const {
      id,
      user_name, 
      first_name,
      middle_name,
      last_name,
      mobile_no,
      email,
      password,
      account_confirmation,
      reset_pass,
      designation,
      is_active,
      is_deleted,
      created_by,
      created_date,
      updated_by,
      updated_date,
      img,
      is_first_login,
      is_boldbi_user,
      roleId,
      clientId
      
   } = request.body;
   

   response.json({ message: "Signup successful" });
});
/*
get the data in json format sign up details
*/
app.get("/signup", (request, response) => {
 
   const jsondata = request.body;
   

   response.send({ jsondata });
});


