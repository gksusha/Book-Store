import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";

const app = express();

app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongodb

try {
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB: ", error);
}

// define routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
