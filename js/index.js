const express = require("express");
const moment = require("moment");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  const now = moment().format("MMMM Do YYYY, h:mm:ss a");
  res.send(`Current time is: ${now}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
