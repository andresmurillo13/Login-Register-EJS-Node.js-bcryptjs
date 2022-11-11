const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const sesion = require('express-session')
const app = express();
const bcryptjs = require('bcryptjs')

// importing routes
const customerRoutes = require('./routes/customer');
const loginRoutes = require('./routes/login')
const { connect } = require('http2');
const connection = require('express-myconnection');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'maximmtto'
}, 'single'));

//PARA CAPTURAR DATOS DEL FORMULARIO
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//INVOCAMOS SESSION
app.use(sesion({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


app.get('/formEmpleados', (req, res) => {
  res.render('formEmpleados');
});


// routes
app.use('/',loginRoutes);
app.use('/', customerRoutes);





// static files
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

