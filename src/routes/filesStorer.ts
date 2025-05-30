import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
import shortId from "shortid";
import path from "path";
import fs from "fs";
import {
  toGetAllFiles,
  toGetFileById,
  toStoreFiles,
} from "../controller/filesStorer";

import { ImpCons } from "../constants/config";
import { CustomRequest } from "../constants/type";

const router = express.Router();

const uploadsDir = path.join(path.dirname(__dirname), ImpCons.DirName);
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), ImpCons.DirName));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});

const upload = multer({ storage });
router.post("/files/create", upload.array("files"), toStoreFiles);

router.get("/files/get", toGetAllFiles);
router.get("/files/:productId", toGetFileById);

export default router;
