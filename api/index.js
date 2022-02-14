import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGODB_URL, () =>
  console.log("Connected to DB!")
);

app.get("/", (req, res) => {
  res.send("Hello there!!!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT localhost:${PORT}`);
});
