/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("students_result").del();
  await knex.schema.raw("SELECT SETVAL ('students_result_id_seq', 1, false)");
  await knex("students_result").insert([
    {
      id: 1,
      students_code: "function returnVal (val) { return val };",
      isPassed: true,
    },
  ]);
};
