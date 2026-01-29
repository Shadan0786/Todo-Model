const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// CREATE TODO
router.post("/", async (req, res) => {
  const todo = await Todo.create({ title: req.body.title });
  res.status(201).json(todo);
});

// GET ALL TODOS
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// UPDATE TODO
router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
});

// DELETE TODO
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
