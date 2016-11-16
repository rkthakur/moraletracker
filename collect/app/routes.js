var session = require("express-session");
var mongodb = require('mongodb');
var request = require('request');
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;

module.exports = function (app, ObjRepo) {
    // server routes ===========================================================
    /* GET home page. */
    app.get('/', function (req, res, next) {
        res.render('index', {title: 'Morale Tracker', user: req.user });
    });
    app.get('/setdata', function (req, res, next) {
      if (req.query.morale)
      {
          var data=[{'datetime' : new Date(),'userIPaddress' : req.connection.remoteAddress,'morale' : req.query.morale}];
          ObjRepo.db.connectionObj.collection("moraletracker").insert(data, function (err, result) {
          res.send(result);
      });
    }
    else
    {
      res.send({'ERROR' : 'Invalid Request'});
    }
    });
}
