const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

//Define routes and write into variable
const index = require('./routes/index');
const partials = require('./routes/partials');
//var users = require('./routes/users');

app.set('views', path.join(__dirname, 'views')); //Show app where the views are.
app.set('view engine', 'jade'); // Set view-engine

//Make the routes usable for the app.
app.use('/', index); //Startpunkt der App
app.use('/partials', partials); //Initialisieren Unterseiten
//app.use('/users', users);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // add favicon in /public
app.use(bodyParser.json()); // Form data
app.use(bodyParser.urlencoded({ extended: true })); // Form data
app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'))); // Middleware
app.use(express.static('./node_modules')); // Middleware

//-------------------------------------------------
//Error Handling
// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
