const jwt = require("jsonwebtoken");
const db = require("../config/db");

const verifyUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      const q = "SELECT * FROM users WHERE id=? ";
      db.query(q, [decoded.id], (err, data) => {
        if (err) return res.json(err);
        req.user = data;
        console.log("verified user from token");
        next();
      });
    } catch (error) {
      console.log(" not verified user from token");
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized,No token");
  }
};

module.exports = { verifyUser };
