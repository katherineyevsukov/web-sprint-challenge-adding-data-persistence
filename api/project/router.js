// build your `/api/projects` router here
const router = require("express").Router();
const Project = require("./model");
const { validateProject } = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateProject, async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
