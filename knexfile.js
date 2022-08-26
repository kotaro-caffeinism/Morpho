require("dotenv").config({ path: "./.env.local" });

module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://localhost:5432/morpho?user=${process.env.DB_USER}&password={process.env.DB_PASSWORD}`,
  searchPath: "public",
  migrations: { directory: "./migrations" },
};
