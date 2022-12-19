const multer = require("multer");

//Multor functions
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "public/images/blogs");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  }
});
//multor
const upload = multer({ storage: storage });

module.exports = { upload };
