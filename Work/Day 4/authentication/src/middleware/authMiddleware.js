import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  let token;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith("Sam")) { //you need pass header with Sam
    token = authHeader.split(" ")[1];  //split token by space and [1] is index of token

    if (!token) { // if i dont pass token no token authorization denied
  return res
    .status(401)
    .json({ message: "No token, Please define token" });
}


try {
  const decode = jwt.verify(token, process.env.JWT_SECRET); //if we pass token and verify this with jwt  we use verify method with secmessage
  req.user=decode
  console.log("The decoded user is",req.user) //then print the user  

  next();
} catch (err) {
  res.status(400).json({ message: "Token is not valid" });//if token is mismatched token is not valid
} 
  }   else{

     return res
    .status(401)
    .json({ message: "No token, authorization denied" });

  }

};


export default verifyToken;