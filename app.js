(function () {
    var express = require('express');
    var app = express();
    ObjRepo = {} //defining app namespace
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var methodOverride = require('method-override');
    var session = require("express-session");
    db = require('./config/db');
    var favicon = require('serve-favicon');
    var path = require('path');
    var cookieParser = require('cookie-parser');

    //var routes = require('./app/index');
    //var users = require('./app/users');

    // view engine pug setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');
    var port = process.env.PORT || 8088;
    if (process.env.NODE_ENV) {
        if ((process.env.NODE_ENV).toUpperCase() == 'DEVELOPMENT')
            var port = process.env.PORT || 8088;
        else if ((process.env.NODE_ENV).toUpperCase() == 'PRODUCTION')
            var port = process.env.PORT || 80;
    }
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
    app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
    app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
    app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
    require('./app/routes')(app,ObjRepo); // pass our application into our routes

    // start app ===============================================
    app.listen(port);
    console.log('Magic happens on port ' + port);

    process.stdin.resume();//so the program will not close instantly

    function exitHandler(options, err) {
        mongoose.disconnect();
        console.log('clean');
        if (options.cleanup) console.log('clean');
        if (err) console.log(err.stack);
        if (options.exit) process.exit();
    }

    //do something when app is closing
    process.on('exit', exitHandler.bind(null, { cleanup: true }));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, { exit: true }));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, { exit: true }));

    exports = module.exports = app;
})({});
