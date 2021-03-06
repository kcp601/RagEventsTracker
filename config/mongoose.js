var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    
    require('../app/models/user.server.model');
    require('../app/models/participant.server.model');
    require('../app/models/event.server.model');
    require('../app/models/adventure.server.model');
    
    return db;
};
