const AuditLog = require('../models/AuditLogModel');

class AuditLogRepoImpl {
  async createLog(logEntry) {
    return await AuditLog.create(logEntry);
  }

  async getPaginated({ page = 1, limit = 20 } = {}) {
    return await AuditLog.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();
  }
}

module.exports = AuditLogRepoImpl;
