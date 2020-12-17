var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tthanonRouter = require('./routes/tthanon');
var tbanmaeRouter = require('./routes/tbanmae');
var tcanyonRouter = require('./routes/tcanyon');
var tgardenRouter = require('./routes/tgarden');
var tmonjamRouter = require('./routes/tmonjam');
var tthapaeRouter = require('./routes/tthapae');
var tflowerRouter = require('./routes/tflower');
var tkangwatRouter = require('./routes/tkangwat');
var twangRouter = require('./routes/twang');
var tearlyRouter = require('./routes/tearly');
var tmoiRouter = require('./routes/tmoi');
var chiangmaiRouter = require('./routes/chiangmai');
var covidRouter = require('./routes/covid');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tthanon', tthanonRouter);
app.use('/tbanmae', tbanmaeRouter);
app.use('/tcanyon', tcanyonRouter);
app.use('/tgarden', tgardenRouter);
app.use('/tmonjam', tmonjamRouter);
app.use('/tthapae', tthapaeRouter);
app.use('/tflower', tflowerRouter);
app.use('/tkangwat', tkangwatRouter);
app.use('/twang', twangRouter);
app.use('/tearly', tearlyRouter);
app.use('/tmoi', tmoiRouter);
app.use('/chiangmai', chiangmaiRouter);
app.use('/covid', covidRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

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
