// Router.js file

const rateLimit = require("express-rate-limit"); // Rate limiter

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests created from this IP, please try again after an hour"
  });


const appRoutes = require('express').Router();
const apiRoutes = require('./api_routes');
const mainRoutes = require('./dev_routes');

appRoutes.use("/api", limiter);

//  Connect all our routes to our application
appRoutes.use('/api', apiRoutes);
appRoutes.use('/dev', mainRoutes);


module.exports = appRoutes;