const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API running");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
