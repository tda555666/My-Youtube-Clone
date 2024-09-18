require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://telahon20:9WgvXUGeonfnRvQp@cluster0.0owou8p.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB
  