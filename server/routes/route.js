const { Router } = require("express");
const { readTodos, createTodos } = require("../controllers/todos");
const router = Router();

router.get("/", readTodos);
router.post("/", createTodos);

module.exports = router;
