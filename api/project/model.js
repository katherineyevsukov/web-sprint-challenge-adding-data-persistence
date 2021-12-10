// build your `Project` model here
const db = require("./../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");

  projects.forEach(
    (proj) => (proj.project_completed = !!proj.project_completed)
  );

  return projects;
}

async function getById(id) {
  const [project] = await db("projects").where("project_id", id);
  
  if (project) {
    project.project_completed = !!project.project_completed;
  }

  return project;
}

async function create(project) {
  const [id] = await db("projects").insert(project);

  const created = await getById(id);
  return created;
}
module.exports = { getAll, create, getById };
