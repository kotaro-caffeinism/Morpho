require("dotenv").config({ path: "../.env.local" });
const config = require("../knexfile");
const knex = require("knex")(config);

const db = knex;
module.exports = db;
