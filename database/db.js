const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

function connection() {
  const mongoURL = process.env.MONGODB_URI;
  mongoose
    .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected");
    });
}

module.exports.connection = connection;
