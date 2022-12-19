const db = require("../config/db");
const cloudinaryUploadImg = require("../utils/cloudinary");

// Get All Blogs
const getAllBlogs = (req, res) => {
  const query = "SELECT * FROM blogs";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//create new blog
const createBlog = async (req, res) => {
  const localPath = `public/images/blogs/${req.file.originalname}`;
  const imageUpload = await cloudinaryUploadImg(localPath);
  const query = "INSERT INTO blogs(`title`,`content`,`image`) VALUES(?)";
  const values = [req.body.title, req.body.content, imageUpload.url];
  db.query(query, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
};

//get single blog

const getSingleBlog = (req, res) => {
  const blogId = req.params.id;
  const query = "SELECT * FROM blogs WHERE id=? ";
  db.query(query, [blogId], (err, data) => {
    if (err) return res.json(err.message);
    console.log(...data);

    return res.json(...data);
  });
};

//update blog

const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const localPath = `public/images/blogs/${req.file.originalname}`;
  const imageUpload = await cloudinaryUploadImg(localPath);
  const query = "UPDATE  blogs SET `title`=?,`content`=?,`image`=?  WHERE id=?";
  const values = [req.body.title, req.body.content, imageUpload.url];
  db.query(query, [...values, blogId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//delete blog
const deleteBlog = (req, res) => {
  const blogId = req.params.id;
  const query = "DELETE FROM blogs WHERE id=?";
  db.query(query, [blogId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getSingleBlog
};
