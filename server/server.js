// main file for backend
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

connectDB();

const app = express();

//enable cross-origin resources sharing
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is Working...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
