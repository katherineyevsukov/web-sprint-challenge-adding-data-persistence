// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require("./model");
const { checkProjectIdExists, validateTaskBody } = require('./middleware')

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateTaskBody, checkProjectIdExists, async (req, res, next) => {
    try{
        const newTask = await Task.create(req.body)
        res.status(201).json(newTask)
    }catch(err){
        next(err)
    }
})

module.exports = router
