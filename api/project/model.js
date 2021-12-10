// build your `Project` model here
const db = require("./../../data/dbConfig")

async function getAll(){
    const projects = await db('projects')
    return projects
}

module.exports = { getAll }
