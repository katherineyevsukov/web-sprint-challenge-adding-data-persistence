// build your `Task` model here
const db = require("./../../data/dbConfig");

// select t.task_id, t.task_description, t.task_notes, t.task_completed,
// p.project_name, p.project_description
//  from tasks as t
// join projects as p
// on t.project_id = p.project_id

async function getAll() {
  const tasks = await db("tasks as t")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .join("projects as p", "t.project_id", "p.project_id");

  tasks.forEach((tsk) => (tsk.task_completed = !!tsk.task_completed));
  return tasks;
}

async function getById(id) {
    const [task] = await db("tasks").where("task_id", id);

    task.task_completed = !!task.task_completed;

    return task;
  }

async function create(task) {
    const [id] = await db("tasks").insert(task);
  
    const created = await getById(id);
    return created;
  }

module.exports = { getAll, create };
