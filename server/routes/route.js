const { Router } = require("express");
const { readTodos, createTodos, updateTodo } = require("../controllers/todos");
const router = Router();

router.get("/read", readTodos);
router.post("/create", createTodos);
router.patch("/:id", updateTodo);

module.exports = router;
