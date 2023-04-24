// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// DATABASE
const url = "mongodb://127.0.0.1:27017/userData";

mongoose.connect(url);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
})

const userinfoSchema = {
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
};

const Userinfo = mongoose.model("Userinfo", userinfoSchema);

// SERVER
app.route("/api")
    .get(async (req, res) => {
      try {
        const foundUserinfos = await Userinfo.find();

        res.send(foundUserinfos);
      } catch (err) {
        res.send(err)
      }
    })


app.listen("5000", () => {
  console.log("server connected to 5000");
});
