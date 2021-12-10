exports.seed = function(knex, Promise) {
  return knex('tasks').insert([   
    { task_description: "Write Endpoints", task_notes: "don't forget to reformat data", task_completed: true, project_id: 2},
    { task_description: "Host on Heroku", task_notes: "make sure to add env variables", task_completed: true, project_id: 2},
    { task_description: "Host on Vercel", task_notes: "create a Vercel account", task_completed: false, project_id: 1},
  ]);
};
