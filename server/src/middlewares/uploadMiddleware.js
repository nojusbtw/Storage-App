import multer from "multer";
import path from "path";

// storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "storage/uploads/");
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + ext;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB
  }
});

export default upload.array("files", 20);