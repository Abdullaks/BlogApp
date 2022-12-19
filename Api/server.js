const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const authRouter = require("./routes/authRoute");
const blogRouter = require("./routes/blogRoute");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(morgan("common"));
app.use(cors());
app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
