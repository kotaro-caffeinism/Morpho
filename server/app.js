const express = require("express");
const path = require("path");
const db = require("./knex");
const fs = require("fs");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/admin", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/api/students-result", async (req, res) => {
  try {
    const results = await db.select().table("students_result");
    res.json(results);
  } catch (err) {
    console.error("Error loading results!", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
