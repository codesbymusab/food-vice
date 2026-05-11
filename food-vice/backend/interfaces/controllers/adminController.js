const RestaurantRepoImpl = require('../../infrastructure/database/mongodb/repositories/RestaurantRepoImpl');
const UserRepoImpl = require('../../infrastructure/database/mongodb/repositories/UserRepoImpl');
const AuditService = require('../../infrastructure/services/AuditService');
const { UserRoles } = require('../../shared/utils/moderationConstants');
const AuditLogRepoImpl = require('../../infrastructure/database/mongodb/repositories/AuditLogRepoImpl');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const auditService = new AuditService();
const auditLogRepo = new AuditLogRepoImpl();

exports.getRestaurants = async (req, res) => {
  try {
    const filters = {
      status: req.query.status,
      flagged: req.query.flagged === 'true',
      search: req.query.search
    };
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const restaurantRepo = new RestaurantRepoImpl();
    const restaurants = await restaurantRepo.getAll(filters, page, limit);
    return res.status(200).json({ success: true, data: restaurants });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.name) {
      return res.status(400).json({ success: false, error: 'Restaurant name is required' });
    }

    const restaurantRepo = new RestaurantRepoImpl();
    const restaurant = await restaurantRepo.createRestaurant(payload);
    await auditService.logAction(req.userId, req.userRole, 'create_restaurant', 'restaurant', restaurant._id, payload);
    return res.status(201).json({ success: true, data: restaurant });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const payload = req.body;

    const restaurantRepo = new RestaurantRepoImpl();
    const restaurant = await restaurantRepo.updateRestaurant(restaurantId, payload);
    if (!restaurant) {
      return res.status(404).json({ success: false, error: 'Restaurant not found' });
    }

    await auditService.logAction(req.userId, req.userRole, 'update_restaurant', 'restaurant', restaurantId, payload);
    return res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurantRepo = new RestaurantRepoImpl();
    const deleted = await restaurantRepo.deleteRestaurant(restaurantId);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Restaurant not found' });
    }

    await auditService.logAction(req.userId, req.userRole, 'delete_restaurant', 'restaurant', restaurantId, {});
    return res.status(200).json({ success: true, data: deleted });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const role = req.query.role;
    const userRepo = new UserRepoImpl();
    const users = await userRepo.getUsers({ role });
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.setUserRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;
    if (!role || !Object.values(UserRoles).includes(role)) {
      return res.status(400).json({ success: false, error: 'Invalid role' });
    }

    const userRepo = new UserRepoImpl();
    const user = await userRepo.setRole(userId, role);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    await auditService.logAction(req.userId, req.userRole, 'set_user_role', 'user', userId, { role });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAuditLogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const logs = await auditLogRepo.getPaginated({ page, limit });
    return res.status(200).json({ success: true, data: logs });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.uploadMiddleware = upload.single('file');
