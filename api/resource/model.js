// build your `Resource` model here
const db = require("./../../data/dbConfig");

async function getAll() {
  const resources = await db("resources");
  return resources;
}

async function getById(id) {
  const [resource] = await db("resources").where("resource_id", id);
  return resource;
}

async function create(resource) {
  const [id] = await db("resources").insert(resource);

  const created = await getById(id);
  return created;
}

module.exports = { getAll, create };
