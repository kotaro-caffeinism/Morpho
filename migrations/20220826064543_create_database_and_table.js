exports.up = function (knex) {
  return knex.schema.createTable("students_result", (table) => {
    table.increments("id").notNullable().index().primary();
    table.text("students_code");
    table.text("instructor_comments");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("students_result");
};
