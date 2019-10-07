const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();

const upload = multer(uploadConfig)


//session
routes.post('/sessions', SessionController.store)
//spot
routes.post('/spots', upload.single('image'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.get('/spots/:spot_id/bookings', BookingController.store)
//dashboard
routes.get('/getSpotsOfUser', DashboardController.show)


module.exports = routes; 