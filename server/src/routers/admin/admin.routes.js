const express = require('express');
const router = express.Router();

const userRoutes = require('./user.router');
const tourRoutes = require('./tour.router');
const reserveRoutes = require('./reserve.router');


router.use('/users', userRoutes);
router.use('/tours', tourRoutes);
router.use('/reservations', reserveRoutes);

module.exports = router;
