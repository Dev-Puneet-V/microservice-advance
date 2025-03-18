import express from "express";
import config from "./utils/config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(config.PORT, () => {
  console.log("User service is running on port " + config.PORT);
});
