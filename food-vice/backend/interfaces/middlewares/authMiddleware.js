const AuthServiceImpl = require('../../infrastructure/services/JWT/AuthServiceImp');
const UserRepoImpl = require('../../infrastructure/database/mongodb/repositories/UserRepoImpl');

exports.verifyAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, error: 'User not logged in' });
    }

    const auth = new AuthServiceImpl();
    const decoded = await auth.verifyToken(token);
    if (!decoded?.userId) {
      return res.status(403).json({ success: false, error: 'Token invalid or expired' });
    }

    const userRepo = new UserRepoImpl();
    const user = await userRepo.findById(decoded.userId);
    if (!user) {
      return res.status(403).json({ success: false, error: 'User not found' });
    }

    if (user.banned) {
      return res.status(403).json({ success: false, error: 'Account banned', banReason: user.banReason, banUntil: user.banUntil });
    }

    req.userId = decoded.userId;
    req.userRole = user.role || 'user';
    next();
  } catch (e) {
    console.error(e);
    res.status(403).json({ success: false, error: 'Token invalid or expired' });
  }
};

exports.requireRole = (roles = []) => async (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const userRepo = new UserRepoImpl();
  const user = await userRepo.findById(req.userId);
  if (!user || !roles.includes(user.role)) {
    return res.status(403).json({ success: false, error: 'Insufficient permissions' });
  }

  req.userRole = user.role;
  next();
};