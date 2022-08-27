require("dotenv").config({ path: ".env.local" });

console.log(process.env.DB_USER);

module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:{process.env.DB_PASSWORD}@localhost:5432/morpho`,
  searchPath: "public",
  migrations: { directory: "./migrations" },
  seeds: { directory: "./seeds" },
};
