const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config({path: "./config/.env"});

const app = express();
app.use(express.json());

//connect to db
mongoose.connect(process.env.DATABASE)
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos",todoRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

