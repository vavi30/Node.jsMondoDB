/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Music1";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(" created!");
  db.close();
});*/
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   dbo.createCollection("NodeSongDetail", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   var myobj = [
//     {SongName : "ThaniyeThananthaniye", Film : "Rhythm",   MusicDirector :"A.R.Rahman",Singer : "Shankar mahadevan"},
//     {SongName : "Evano Oruvan", Film : "Alai Payuthey",   MusicDirector :"A.R.Rahman",  Singer : "Swarnalatha"},
//     {SongName : "Roja Poonthoddam",Film : "Kannukkul Nilavu",MusicDirector :"Illayaraaja",Singer : ["Unnikrishnan","Anuradha"]},
//     {SongName : "Vennilave Vennilave Vinaithaandi",Film : "Minsaara Kanavu", MusicDirector :"A.R.Rahman",Singer :["Hariharan","Sadhana Sargam"]},
//     {SongName : "Sollamal Thoddu Chellum",Film : "Dheena", MusicDirector :"Yuven Shankar Raja",Singer :"Hariharan"}
//   ];
//   dbo.collection("NodeSongDetail").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   dbo.collection("NodeSongDetail").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   var query = { MusicDirector :"A.R.Rahman"  };
//   dbo.collection("NodeSongDetail").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("NodeMusic");
//   //Find all documents in the customers collection:
//   dbo.collection("NodeDetails").find(({MusicDirector : 'A.R.Rahman'},{Singer : 'Unnikrishnan'})).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   var myquery = {SongName : "ThaniyeThananthaniye" };
//   dbo.collection("NodeSongDetail").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Music1");
//   var myobj = {SongName : "Neethanae neethane"};
//   dbo.collection("NodeSongDetail").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
