const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors=require("cors")
const app = express();
const port = process.env.PORT || 3000;

const routes=require("./Routes/Router")
app.use(express.json());

app.use(cors())
mongoose.connect(process.env.BDD)
  .then(() => {
    console.log("BDD connected successfully");
  
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
app.use(routes)

    // Start the server only after the database connection is successful
    app.listen(port, () => console.log(`Listening on: ${port}`));