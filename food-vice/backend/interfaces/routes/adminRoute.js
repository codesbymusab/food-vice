const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyAuth, requireRole } = require('../middlewares/authMiddleware');

router.use(verifyAuth);
router.use(requireRole(['admin']));

router.get('/restaurants', adminController.getRestaurants);
router.post('/restaurants', adminController.createRestaurant);
router.put('/restaurants/:id', adminController.updateRestaurant);
router.delete('/restaurants/:id', adminController.deleteRestaurant);
router.get('/users', adminController.getUsers);
router.put('/users/:id/role', adminController.setUserRole);
router.get('/audit-logs', adminController.getAuditLogs);

module.exports = router;
