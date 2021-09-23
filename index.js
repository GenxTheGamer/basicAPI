const express = require("express");
const app = express();
const { enc } = require("stringonum");
PORT = 8080;

app.use(express.json()); // this middleware is for parsing all the incoming JSON requests

app.get("/:id", (req, res) => {
  res.status(200).send({ message: "this is it", other: req.params.id });
});

app.post("/", (req, res) => {
  const { input } = req.body;
  if (input) {
    const enc_data = enc(input);
    res.status(200).send({ enc_data });
  } else {
    res.status(418).send({ message: "Send an input maytee!! 😶" });
  }
});

app.listen(PORT, () => console.log(`App is up and running on ${PORT} PORT`));
