const express = require("express");
const router = require("./Router/router");
const app = express();
const path = require("path");
const port = 3000;
var cors = require('cors')
const bodyParser = require("body-parser");
require('dotenv')

app.use(cors({credentials:true,origin:'https://youtube-clone-delta-coral.vercel.app'}));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(router);
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
