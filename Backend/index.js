import express, { request } from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Item } from "./models/itemmodel.js";
// import bookroute from "./routes/bookroute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});

// app.use("/books", bookroute);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
