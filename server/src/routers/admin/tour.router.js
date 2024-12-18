const express = require('express');
const AdminTourController = require('../../controllers/admin/tour.controller');

const router = express.Router();

router.post('/', AdminTourController.createTour);

router.get('/:tourId', AdminTourController.getTour);

router.put('/:tourId', AdminTourController.updateTour);

router.delete('/:tourId', AdminTourController.deleteTour);

router.get('/', AdminTourController.getTours);

module.exports = router;
