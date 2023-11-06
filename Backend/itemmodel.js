import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   phoneno: {
      type: Number,
      required: true,
    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    image:{
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("itemSchema", itemSchema);
