const express = require('express');
const ReserveController = require('../controllers/reserve.controller');

const router = express.Router();

router.get('/', ReserveController.getMyReservations);

router.post('/:tourId', ReserveController.createReservation);

router.delete('/:reserveId', ReserveController.cancelReservation);

module.exports = router;
