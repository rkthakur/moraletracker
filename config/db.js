var mongoose = require('mongoose');
//var connString = 'mongodb://localhost:27017/people';
var connString = 'mongodb://rakesh:rkt123@ds131583.mlab.com:31583/people';
module.exports = ObjRepo.db = {
    connectionString: connString,
    connectionObj: mongoose.createConnection(connString),
}
