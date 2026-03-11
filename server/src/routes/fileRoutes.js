import express from "express";
import uploadMiddleware from "../middlewares/uploadMiddleware.js";
import { uploadFiles } from "../controllers/fileController.js";

const router = express.Router();

router.post('/files/upload', uploadMiddleware, uploadFiles);


export default router;