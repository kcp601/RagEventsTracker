var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session');

module.exports = function() {
    var app = express();
    
    app.use(bodyParser.urlencoded({
	extended: true
    }));

    app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'SuperSecretCookieLolz'
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/participants.server.routes.js')(app);
    require('../app/routes/events.server.routes.js')(app);
    require('../app/routes/adventures.server.routes.js')(app);

    app.use(express.static('./public')); 

    return app;
};
