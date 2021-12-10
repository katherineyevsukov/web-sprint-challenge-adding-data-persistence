exports.seed = function(knex, Promise) {
  return knex('projects').insert([   
    { project_name: "Create an API", project_description: "make a backend using node and express", project_completed: true},
    { project_name: "Make a React App", project_description: "make a front end", project_completed: false}
  ]);
};
