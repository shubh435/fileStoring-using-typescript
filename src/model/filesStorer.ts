import mongoose, { Document, Schema } from "mongoose";

interface IFile {
  fileUrl: string;
  fileType: string;
}

export interface IFileStore extends Document {
  name: string;
  files?: IFile[];
}

const fileSchema = new Schema<IFile>(
  {
    fileUrl: { type: String, required: true, unique: true },
    fileType: { type: String, required: true },
  },
  { _id: false }
);

const fileStoreSchema = new Schema<IFileStore>(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    files: [fileSchema],
  },
  { timestamps: true }
);

const FileStore = mongoose.model<IFileStore>("FileStore", fileStoreSchema);

export default FileStore;
