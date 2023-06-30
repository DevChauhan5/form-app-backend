const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect(process.env.MONOGO_URL);

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const form = mongoose.model("form", formSchema);

app.post("/api/form", async (req, res) => {
  const { name, email } = req.body;
  await form.create({ name, email });

  res.json({ message: "Data Recived!" });
});

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT}`);
});
