'use strict'

var express = require("express");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
var diskdb = require('diskdb');
var assert = require('assert');
// var ObjectID = mongodb.ObjectID;


// our basic trusty tiny web server
var app = express();

// get the middleware to parse incoming JSON
app.use(bodyParser.json());

// Connect to the database; using core Mongo support; 
// Mongoose is a possible option if it helps with server-side validation
// var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/registration';
// mongodb.MongoClient.connect(mongoURL,
//     function (err, database) {
//         assert.equal(null, err, "failed to connect to Mongo instance");
//         if (err) {
//             console.log(err);
//             process.exit(1);
//         }
//         // database object is deliberate global so it is usuable 
//         // throughout the application and we don't continuously reconnect.
//         // Don't like it at all; should wrap this in a service module.
//         console.log("Database connection ready");
//         db = database;
// });

var db = diskdb.connect('./datastore');
db.loadCollections(["attendees"]);

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
      var all = db.attendees.find();
      res.status(200).json(all);
  });
  
  app.post("/event/attendee", function(req, res) {
      var attendee = req.body
      attendee.registerDate = new Date();
    //   db.collection(ATTENDEES_COLLECTION).insertOne( attendee, function(result,err) {
    //       console.log(err);
    //       assert.equal(null,err);
    //       assert(1,result.insertedCount);
    //   });
    db.attendees.save(attendee);
    console.log(attendee);
    res.status(200).json(attendee);
  });

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });