const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {  //checks the role if role is not matched access denied
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

export default authorizeRoles
