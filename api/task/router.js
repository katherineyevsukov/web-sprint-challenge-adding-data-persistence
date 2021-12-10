// build your `/api/tasks` router here
const router = require('express').Router()

const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router
