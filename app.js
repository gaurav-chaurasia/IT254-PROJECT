// ----------------------------------------
// import node modules
// ----------------------------------------
const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config = require('./config/config')[process.env.NODE_ENV || 'development'];
const usersRouter = require('./routes/users');


// ----------------------------------------
// connect database
// ----------------------------------------
mongoose
  .connect(config.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log('Connected Successfully to Database!'));

mongoose.connection.on('error', (err) => {
  console.log('Database connection error:' + err);
});
const app = express();


// ----------------------------------------
// view engine setup
// ----------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ----------------------------------------
// routing
// ----------------------------------------
app.use('/users', usersRouter);


// ----------------------------------------
// catch 404 and forward to error handler
// ----------------------------------------
app.use((req, res, next) => {
  next(createError(404));
});


// ----------------------------------------
// error handler
// ----------------------------------------
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {err: err});
});

module.exports = app;
