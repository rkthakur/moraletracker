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
    app.get('/report', function (req, res, next) {
        res.render('report', {title: 'Morale Tracker', user: req.user });
    });
    app.get('/heatmap', function (req, res, next) {
        res.render('heatmap', {title: 'Morale Tracker', user: req.user });
    });

    app.get('/setdata', function (req, res, next) {
      if (req.query.morale)
      {
          var data=[{'datetime' : new Date(),'userIPaddress' : req.connection.remoteAddress,'morale' : req.query.morale}];
          ObjRepo.db.connectionObj.collection("moraletracker").insert(data, function (err, result) {
          res.redirect('/');
          //res.send(result);
      });
    }
    else
    {
      res.send({'ERROR' : 'Invalid Request'});
    }
    });

    app.get('/api/data', function (req, res) {
        // use mongoose to get all nerds in the database
        var cursor = ObjRepo.db.connectionObj.db.collection("moraletracker").find({"datetime": {$gt : new Date(new Date() - 24*60*60*1000)}},{_id:0,morale:1});
        var dataArray = [];
        cursor.each(function (err, doc) {
            if (doc != null) {
                dataArray.push(doc);
            } else {
                res.send(dataArray);
            }
        });
    });

}
