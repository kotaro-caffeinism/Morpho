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

app.get("/assessment", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/assessment", async (req, res) => {
  // await db.raw("SELECT SETVAL ('result_id_seq', 1, false)");

  console.log(req.body, "req.body");
  console.log(req.body.code, "req.body.code");
  // console.log(await JSON.parse(req.body), "parsed req.body");
  // console.log(await req.body.code, "req.body.code");

  // const id = 10000;

  // const nextId = id[0].max + 1;
  // console.log(nextId, "nextId");

  await db("result").insert([
    // { id },
    { code: req.body.code },
    { isPassed: true },
  ]);

  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.get("/admin", async (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/admin", async (req, res) => {
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
