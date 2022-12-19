const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middlewares/auth");
const { upload } = require("../middlewares/uploads");
const {
  getAllBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogcontroller");

router.get("/", verifyUser, getAllBlogs);
router.post("/", verifyUser, upload.single("file"), createBlog);
router.get("/:id", verifyUser, getSingleBlog);
router.put("/update/:id", verifyUser, upload.single("file"), updateBlog);
router.delete("/delete/:id", verifyUser, deleteBlog);

module.exports = router;
