const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
app.use(cors());
const bodyParser = require("body-parser");
const { insertSubmission, getSubmissions, db } = require("./db/index.js");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/insert", async (req, res) => {
  try {
    const post = req.body;
    const result = await insertSubmission(post);

    res.status(200).send("submission inserted");
  } catch (err) {
    console.log(err);
    res.status(400).send("failed to insert submission");
  }
});
app.get("/results", async (req, res) => {
  try {
    const result = await getSubmissions();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send("failed to get results");
  }
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
