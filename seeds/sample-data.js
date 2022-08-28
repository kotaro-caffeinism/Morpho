/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("result").del();
  await knex.schema.raw("SELECT SETVAL ('result_id_seq', 1, false)");
  await knex("result").insert([
    {
      id: 1,
      code: "function returnVal (val) { return val };",
      isPassed: true,
    },
  ]);
};
