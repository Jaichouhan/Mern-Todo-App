const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotnev = require("dotenv");
const app = express();
const port = 8000;
dotnev.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const todoRoutes = require("./routes/route");
app.use("/", todoRoutes);

const database =
  "mongodb+srv://jaichouhan:1ap7R5L3xiPz4Pa5@cluster0.7wnnt.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(database, { useNewUrlParser: true })
  .then((res) => {
    console.log("Conneted");
    app.listen(port, () => {
      console.log(`your server is running http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello");
});
