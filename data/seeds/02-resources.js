exports.seed = function(knex, Promise) {
  return knex('resources').insert([   
    { resource_name: "Tailwind CSS", resource_description: "style using using a library"},
    { resource_name: "Global State Management", resource_description: "Redux vs. Hooks"},
    { resource_name: "RDBMS", resource_description: "relational database management sytems"},
    { resource_name: "JavaScript: The Definitive Guide", resource_description: "classes, promises, generators, & more"},
    { resource_name: "SQL", resource_description: "how to query a database"},
  ]);
};
