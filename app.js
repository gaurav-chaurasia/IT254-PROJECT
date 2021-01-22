// ----------------------------------------
// import node modules
// ----------------------------------------
const createError  = require('http-errors');
const express      = require('express');
const app          = express();
const mongoose     = require('mongoose');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const session      = require('express-session');
const FileStore    = require('session-file-store')(session);
const passport     = require('passport');
const flash        = require('connect-flash');
const layout       = require('express-ejs-layouts');
require('dotenv').config();

// ----------------------------------------
// import local node modules
// ----------------------------------------
const config         = require('./config/config')[process.env.NODE_ENV || 'development'];
const { ROUTES }     = require('./config/ROUTES');
const userRouter     = require('./routes/users');
const mapRouter      = require('./routes/maps');   
const msgRouter      = require('./routes/msg');   
const diseaseRouter  = require('./routes/diseases');
const medicineRouter = require('./routes/medicines');
const testRouter     = require('./routes/tests');
const homeRouter     = require('./routes/home');


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



// ----------------------------------------
// view engine setup
// ----------------------------------------
app.use(layout);
app.set('layout', './layouts/layout')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ----------------------------------------
// passport configuration
// ----------------------------------------
app.use(session({
	name: config.session,
	secret: config.secret,
	saveUninitialized: false,
	resave: false,
	store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// ----------------------------------------
// set local variables 
// ----------------------------------------
app.use((req, res, next) => {
  res.locals.ROUTES       = ROUTES;
  res.locals.current_user = req.user;
  res.locals.info         = req.flash('info');
  res.locals.danger       = req.flash('danger');
  res.locals.success      = req.flash('success');
  res.locals.warning      = req.flash('warning');
  next();
});


// ----------------------------------------
// routing
// ----------------------------------------
app.use(testRouter);
app.use(userRouter);
app.use(mapRouter);
app.use(msgRouter);
app.use(diseaseRouter);
app.use(medicineRouter);
app.use(homeRouter);


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
  // res.status = err.status || 500;
  res.render('error');
});

module.exports = app;
