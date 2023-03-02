const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const URL =
  "mongodb+srv://IsaacEbenezer:isaac1234@cluster0.bpofqgo.mongodb.net/?retryWrites=true&w=majority";

  app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//to disable Mongoose's strict query mode
mongoose.set("strictQuery", false);

//connection
mongoose
  .connect(URL, { useNewUrlParser: true })
  .then((res) => console.log("connected to the database"))
  .then(() => app.listen(PORT, () => console.log("connected to server")));