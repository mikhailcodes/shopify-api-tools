//Load node.js modules
const app = require('express')(); //Require the Express Module
const PORT = process.env.PORT || 3000;
const routes = require('./routes/router.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express'); //Require the Express Module
const cors = require('cors') // Cors

app.use(cors()); // Enables CORS
app.use(express.static('/public')); //Tells the apiRoutes to serve static files from ./public_html/
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});


app.use('/', routes); //  Connect all our routes to our application
app.listen(PORT, () => console.log(`Listening on ${PORT}`)) // Turn on that server!


