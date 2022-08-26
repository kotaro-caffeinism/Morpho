require("dotenv").config();
const config = require("../knexfile");
const knex = require("knex")(config);

const db = knex;
module.exports = db;
