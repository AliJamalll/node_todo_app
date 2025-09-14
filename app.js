const express = require('express');
const morgan = require('morgan');
const todoRouter = require('./routes/todoRoutes');

const app = express();

// 1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // Parse JSON body

// Custom middleware
app.use((req, res, next) => {
  console.log("hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) Routes
app.use("/api/v1/todo", todoRouter);

// 3) Export app
module.exports = app;
