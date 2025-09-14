const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const app = require('./app');

console.log(app.get("env"));

dotEnv.config({path: "./config.env"});


const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch(err => {
    console.error("DB connection error:", err);
  });



// const todoRoutes = require("./routes/todoRoutes.js");
// app.use("/api/todos",todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

