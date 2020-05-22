var path = require('path');
const express = require("express");
var cors = require("cors");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());

const logs = [];

app.get("/api/get_logs", (req, res) => {
  res.status(200).send(logs);
});

app.post("/api/new_log", (req, res) => {
  const log = req.body;

  logs.unshift(log);

  if (logs.length > 10) {
    logs.pop();
  }

  res.status(200).json({
    message: "Log created successfully",
  });
});

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "/build/index.html"));
  res.sendFile(path.join(__dirname, "/build/index.html"));
});


app.listen(port, () => {
  console.log(`running at port ${port}`);
});
