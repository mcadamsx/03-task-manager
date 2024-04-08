require("dotenv").config();

const express = require("express");
const app = express();



const connectDB = require("./db/connect");
const router = require("./router/user.router");



app.use(express.json());
app.use("/api", router);





const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
    connectDB(process.env.DB_URL);
    console.log("connected to database ");
  } catch (error) {
    console.log("unable to coonect to databse");
  }
};
start();
