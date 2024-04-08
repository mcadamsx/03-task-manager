const express = require("express");
const app = express();
const task = require("./routes/takes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const port = 3000;

//middleware
app.use(express.json());

// Routes
app.get("/hello", (request, response) => {
  response.send("Task manager");
});

app.use("/api/v1/task", task);

// app.get ()d

const start = async () => {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("connected to databse...");
        app.listen(port, () => console.log(`Server running on port ${port}`));
      })
      .catch(() => {
        console.error("Failed to connect to databse");
      });
  } catch (error) {
    console.log(error);
  }
};
start()
