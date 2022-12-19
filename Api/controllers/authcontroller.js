const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE email=? ";
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) {
        return res.status(409).json("user already exists");
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      const query =
        "INSERT INTO users(`name`,`email`,`phone`,`gender`,`password`) VALUES(?)";
      const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.gender,
        hashedPassword
      ];
      db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has created Successfully");
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE email=? ";
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.json(err);
      if (data.length === 0) return res.json("user does not exist");

      const checkPassword = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
      if (!checkPassword) {
        return res.json("Incorrect password");
      }

      const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET);
      res.json({
        name: data[0].name,
        email: data[0].email,
        phone: data[0].phone,
        gender: data[0].gender,
        token: token
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login
};
