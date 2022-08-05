const mongoose = require("mongoose");
const Todo = require("../modules/todos");

module.exports.readTodos = async (req, res) => {
  try {
    Todo.find()
      .then((data) => {
        res.status(200).json({
          msg: data,
          status: true,
        });
      })
      .catch((err) => {
        res.status(400).json({
          msg: data,
          status: false,
        });
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

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const { tile, content } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The id ${id} is not valid`);
  }
  const todo = { title, content, _id: id };
  await Todo.findByIdAndUpdate(id, todo, { new: true });
  res.send(todo);
};
