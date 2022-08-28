const express = require("express");
const path = require("path");
const db = require("./knex");
const fs = require("fs");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/admin", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/admin", async (req, res) => {
  // req.body じゃ出なかった。なぜ…
  // react だから？ json は出なかったとか
  res.send(req.body.comment);

  // knex("students_result")
  // .update({
  //   instructor_comment: comment,
  // })
  // .where("id", id);
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
