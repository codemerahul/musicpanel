var express = require('express'),       
mongoose = require('mongoose'),
        bodyParser = require('body-parser'),
        passport = require('passport'),
        cookieParser = require('cookie-parser'),
        methodOverride = require('method-override'),
        cors = require('cors'),
        app = express();

// ENVIRONMENT CONFIG
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
        envConfig = require('./server/env')[env];

mongoose.connect('mongodb://rahul:rahul123@ds111895.mlab.com:11895/future');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected');
});

// PASSPORT CONFIG
require('./server/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));


// ROUTES
require('./server/routes')(app, passport);

// Start server
app.listen(envConfig.port, function() {
    console.log('The Magician is on  ' + envConfig.port)
});