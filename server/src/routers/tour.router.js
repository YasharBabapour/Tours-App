const express = require('express');
const TourController = require('../controllers/tour.controller');

const router = express.Router();
const tourController = new TourController();

router.get('/top', tourController.getTopTours);

router.get('/', tourController.getTours);

router.get('/:id', tourController.getTourById);

module.exports = router;
