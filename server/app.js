const express = require("express");
const path = require("path");
const db = require("./knex");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/students-result", async (req, res) => {
  try {
    // console.log(await db, "db");
    console.log(await db.select, "select");
    console.log(await db.table("students_result"), "table");
    console.log(await db.select("id").from("students_result"), "select");
    const results = await db.select().table("students_result");
    console.log(results, "results");
    res.json(results);
  } catch (err) {
    console.error("Error loading results!", err);
    res.sendStatus(500);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
