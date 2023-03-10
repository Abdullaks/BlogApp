const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECURITY_KEY
});

const cloudinaryUploadImg = async fileTOUpload => {
  try {
    const data = await cloudinary.uploader.upload(fileTOUpload, {
      resource_type: "auto"
    });
    return {
      url: data.secure_url
    };
  } catch (error) {
    return error;
  }
};

module.exports = cloudinaryUploadImg;
