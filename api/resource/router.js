// build your `/api/resources` router here
const router = require("express").Router();
const Resource = require("./model");
const { validateResource } = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateResource, async (req, res, next) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
