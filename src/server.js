'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const dateFormat = require('dateformat');
const states = require('./public/scripts/statelist');

var ObjectID = mongodb.ObjectID;


// our basic trusty tiny web server
var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/registration';
var db;
var ObjectID = mongodb.ObjectID;

var ATTENDEES_COLLECTION = "attendees";

mongodb.MongoClient.connect(mongoURL,
    function (err, database) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        // database object is deliberate global so it is usuable 
        // throughout the application and we don't continuously reconnect.
        // Don't like it at all; should wrap this in a service module.
        console.log("Database connection ready");
        db = database;
});

// set  up error handling and two endpoints

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
 const ATTENDEE_ENDPOINT = "/event/attendee";
  /* connect to our attendee endpoint:
  * GET: Return all attendees
  * POST: Registers a new attendee and returns confirmation data
  */
  // TODO -- wrap all this in a service on this side too
  app.get(ATTENDEE_ENDPOINT, function(req, res) {
    for (abbrev in states) {

    }

  });
  
  app.post(ATTENDEE_ENDPOINT, function(req, res) {
      var attendee = req.body;
      console.log(req.body);
      var now = new Date();
      attendee.registerDate = now;
      // TODO - validate data
      db.collection(ATTENDEES_COLLECTION).insertOne(attendee, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new attendee.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      }
  );
});

// one more incidental service -- return all the state abbreviations
// only here because I need this on both server and client side and 
// figuring out a common module sharing strategy was taking longer
app.get(ATTENDEE_ENDPOINT, function(req, res) {
  db.collection(ATTENDEES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get attendee list");
    } else {
      res.status(200).json(docs);
    }
  });
});
app.get('/event/state', function(req, res) {
  var stateAbbrevs = [];
  for (let abbrev in states) {
    stateAbbrevs.push(abbrev);
  }

  stateAbbrevs.sort
  res.status(200).json(stateAbbrevs)
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
 });