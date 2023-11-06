import express, { request } from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Item } from "./models/itemmodel.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/item", async (req, res) => {
  try {
    const items = await Item.find({});
    return res.status(200).json({
      count: items.length,
      data: items,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/item", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phoneno ||
      !req.body.title ||
      !req.body.description
    ) {
      return res.status(400).send({ message: "all fields sent" });
    }
    const newItem = {
      name: req.body.name,
      email: req.body.email,
      phoneno: req.body.phoneno,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
    };

    const item = await Item.create(newItem);
    return res.status(200).send(item);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
});

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
