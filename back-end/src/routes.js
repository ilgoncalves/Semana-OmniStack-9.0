const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardControlles')

const routes = express.Router();

const upload = multer(uploadConfig)


//session
routes.post('/sessions', SessionController.store)
//spot
routes.post('/spots', upload.single('image'), SpotController.store)
routes.get('/spots', SpotController.index)
//dashboard
routes.get('/getSpotsOfUser', DashboardController.show)


module.exports = routes; 