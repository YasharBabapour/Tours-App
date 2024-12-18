const express = require('express');
const AdminReserveController = require('../../controllers/admin/reserve.controller');
const { filterQueryMiddleware } = require('../../middleware/query.middleware');

const router = express.Router();

router.get('/', filterQueryMiddleware, AdminReserveController.getReserves);

router.get('/:reserveId', AdminReserveController.getReservationDetails);

router.get('/tours/:tourId', AdminReserveController.getReservationsByTour);

router.get('/users/:userId', AdminReserveController.getReservationsByUser);

module.exports = router;
