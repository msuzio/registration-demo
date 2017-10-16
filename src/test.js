 'use strict'

 function compare (a,b) {
  if ((a === undefined || a === null) || (b === undefined || b === null)) {
    // do something 
    console.log("a =" +a +" b ="+ b);
}
    if (a) {
      if (b) {
      if (a == b) {
        return 0;
        } else  {
          return a < b ? 1:-1;
        }
      } else {
        // no b -- sort lower
        return -1;
      }
    } else {
    // no a -- sort a lower
    return -1;
  }
}

 var dates = [];
 for (let i = 0; i <10; i++) {
  let  d = new Date();
  if (i %2) {
    d.setMinutes(i);
  } else {
    d.setHours(12-i);
    dates.unshift(d);
 }
}
 dates.unshift(null);
 dates.push(undefined);
 dates.unshift(null);
 dates.unshift(undefined);

 for (let j = 0; j <dates.length; j++) {
  console.log(dates[j]);
}
console.log("Sorted");
dates.sort(compare);
for (let j = 0; j <dates.length; j++) {
  console.log(dates[j]);
}

// var MongoClient = require('mongodb').MongoClient
// , assert = require('assert');

// // Connection URL
// var url = 'mongodb://localhost:27017/new';
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
// assert.equal(null, err);
// console.log("Connected correctly to server");

// // Insert a single document
// db.collection('inserts').insertOne({a:1}, function(err, r) {
//   assert.equal(null, err);
//   assert.equal(1, r.insertedCount);

//   // Insert multiple documents
//   db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
//     assert.equal(null, err);
//     assert.equal(2, r.insertedCount);

//     db.close();
//   });
// });
// });