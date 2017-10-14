var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var ATTENDEES_COLLECTION = "attendees";

// our basic trusty tiny web server
var app = express();

// get the middleware to parse incoming JSON
app.use(bodyParser.json());

var db;

// Connect to the database; using core Mongo support; Mongoose is a possible option
// if server-side vaslidation requires it
mongodb.MongoClient.connect(process.env.MONGODB_URI, 
function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

  // database object is deliberate global so it is usuable 
  // throughout the application.
  db = database;
  console.log("Database connection ready");

  // set  up error handling and two endpoints

  // Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
  
  /*  /event/attendee
  * GET: Return all attendees
  * POST: Registers a new attendee and returns confirmation data
  */
  
  app.get("/event/attendee", function(req, res) {
  });
  
  app.post("/api/attendee", function(req, res) {
  });

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });