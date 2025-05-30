import express from "express";
import cors from 'cors'
import env from 'dotenv'
import filesStorerRoutes from "./routes/filesStorer"
import connectToDatabase from "./DB/db";
import path from 'path'
import { ImpCons } from "./constants/config";
const app = express();

connectToDatabase();

env.config();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, ImpCons.DirName)));
app.get("/", (req, res) => {
  res.send("Welcome to express server....");
});

app.use("/api", filesStorerRoutes);

app.listen(PORT, () => {
  console.log("----connected with express server on PORT http://localhost:" + PORT);
});