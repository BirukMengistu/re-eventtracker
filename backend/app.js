const express = require('express');
const app = express();
const cors = require('cors');

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController')



// -- MIDDLEWARE -- //
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// -- CONTROLLERS -- //
app.use('/api/events', eventController);
app.use('/api/users', userController);



module.exports = app