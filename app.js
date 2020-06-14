var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');

var userRouter = require('./routes/userRouter');

var mongoose = require('mongoose');
var config = require('./config');

var connect = mongoose.connect(process.env.MONGODB_URI || config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(db => {
  console.log('Connection to mongoDB Successful');
}, err => console.log(err));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  name: 'session-id',
  secret: config.secret,
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(express.static(path.join(__dirname, '/public')));

app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
