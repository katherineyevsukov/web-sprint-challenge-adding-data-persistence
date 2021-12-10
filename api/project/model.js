// build your `Project` model here
const db = require("./../../data/dbConfig")

async function getAll(){
    const projects = await db('projects')
    projects.forEach(proj => proj.project_completed = !!proj.project_completed)
    return projects
}

module.exports = { getAll }
