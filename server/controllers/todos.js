const mongoose = require("mongoose");
const Todo = require("../modules/todos");

module.exports.readTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(200).json({
      msg: todos,
      status: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.createTodos = async (req, res) => {
  const { title, content } = req.body;
  try {
    const todos = await Todo.create({
      title,
      content,
    });
    res.status(200).json({
      msg: todos,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: error.message, status: false });
  }
};
