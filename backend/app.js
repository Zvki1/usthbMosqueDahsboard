const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// import the routes
const articleRoutes = require("./routes/ArticleRoutes");
dotenv.config();
const app = express();
app.use(express.json());
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.use("/api/articles", articleRoutes);
  















connectDB()
  .then(() => {
    // Start the server only if the DB connection is successful
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.");
  });
