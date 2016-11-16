var mongoose = require('mongoose');
var connString = 'mongodb://localhost:27017/people';
module.exports = ObjRepo.db = {
    connectionString: connString,
    connectionObj: mongoose.createConnection(connString),
}
