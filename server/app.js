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

  await db("result").where("id", req.body.id).update({
    instructor_comment: req.body.comment,
  });

  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/signup", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/login", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/api/students-result", async (req, res) => {
  try {
    const result = await db.select().table("result");
    res.json(result);
  } catch (err) {
    console.error("Error loading result data!", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
