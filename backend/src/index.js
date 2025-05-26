const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`api-destinara running on port : ${port}`);
});

// const data = "halo";
// console.log(data);
