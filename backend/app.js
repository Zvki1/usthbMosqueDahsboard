const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
// import the routes
const articleRoutes = require("./routes/ArticleRoutes");
const submissionRoutes = require ("./routes/SubmissionRoutes")
const activityRoutes =require ("./routes/AcvtivityRoutes")
const lostItemRoutes = require("./routes/LostItemRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/articles", articleRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/lostItems", lostItemRoutes);









connectDB()
  .then(() => {
    // Start the server only if the DB connection is successful
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB. Server not started.", err);
  });
