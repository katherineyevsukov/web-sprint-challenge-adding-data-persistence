// build your `Resource` model here
const db = require("./../../data/dbConfig")

async function getAll(){
    const resources = await db('resources')
    return resources
}

module.exports = { getAll }
