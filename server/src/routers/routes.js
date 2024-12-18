const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.router');
const tourRoutes = require('./tour.router');
const reserveRoutes = require('./reserve.router');
const adminRoutes = require('./admin/admin.routes');
const { authenticatedUser, adminRole } = require('../middleware/auth.middleware');


router.use('/auth', authRoutes);
router.use('/tours', tourRoutes);
router.use('/reservations', authenticatedUser, reserveRoutes);
router.use('/admin', authenticatedUser, adminRole, adminRoutes);

module.exports = router;
