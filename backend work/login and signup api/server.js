require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const signup_request = require("./routes/signup-request");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const port = 3000 || process.env.PORT;

app.use("/signup", signup_request);

app.listen(port, () => {
  console.log(`Listening at port no ${port}`);
});
