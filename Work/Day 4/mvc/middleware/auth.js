// middleware/auth.js

const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (header === '12345') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = auth;
