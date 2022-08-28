/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("result", (table) => {
    table.increments("id").notNullable().index().primary();
    table.text("code");
    table.boolean("isPassed");
    table.text("instructor_comment");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("result");
};
