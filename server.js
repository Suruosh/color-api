require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// SCHEMA: Only storing hex
const Color = mongoose.model(
  "Color",
  new mongoose.Schema({
    hex: String
  })
);

// POST: add a color
app.post("/api/colors", async (req, res) => {
  const { hex } = req.body;

  if (!hex) {
    return res.status(400).json({ message: "Hex code required" });
  }

  try {
    const color = await Color.create({ hex });
    res.status(201).json(color);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: all colors
app.get("/api/colors", async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: 3 random colors
app.get("/api/colors/random", async (req, res) => {
  try {
    const count = await Color.countDocuments();
    if (count === 0) return res.status(404).json({ message: "No colors found" });
    
    const colors = await Color.aggregate([{ $sample: { size: 3 } }]);
    res.status(200).json(colors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));