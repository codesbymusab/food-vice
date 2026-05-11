const GetReviewQueue = require('../../application/use-cases/moderation/GetReviewQueue');
const FlagReview = require('../../application/use-cases/moderation/FlagReview');
const ModerateReview = require('../../application/use-cases/moderation/ModerateReview');
const GetThreadQueue = require('../../application/use-cases/moderation/GetThreadQueue');
const ModerateThread = require('../../application/use-cases/moderation/ModerateThread');
const GetReports = require('../../application/use-cases/moderation/GetReports');
const AssignReport = require('../../application/use-cases/moderation/AssignReport');
const ResolveReport = require('../../application/use-cases/moderation/ResolveReport');
const BanUser = require('../../application/use-cases/moderation/BanUser');
const UnbanUser = require('../../application/use-cases/moderation/UnbanUser');
const ReviewRepoImpl = require('../../infrastructure/database/mongodb/repositories/ReviewRepoImpl');
const ThreadRepoImpl = require('../../infrastructure/database/mongodb/repositories/ThreadRepoImpl');
const ReportRepoImpl = require('../../infrastructure/database/mongodb/repositories/ReportRepoImpl');
const UserRepoImpl = require('../../infrastructure/database/mongodb/repositories/UserRepoImpl');
const AuditService = require('../../infrastructure/services/AuditService');
const { ReportStatus, ReviewStatus } = require('../../shared/utils/moderationConstants');

const auditService = new AuditService();

exports.getReviewQueue = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const status = req.query.status || ReviewStatus.PENDING;
    const search = req.query.search || '';

    const reviewRepo = new ReviewRepoImpl();
    const getReviewQueue = new GetReviewQueue(reviewRepo);
    const reviews = await getReviewQueue.execute({ page, limit, status, search });

    return res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.flagReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { reason } = req.body;
    if (!reason) {
      return res.status(400).json({ success: false, error: 'Reason is required' });
    }

    const reviewRepo = new ReviewRepoImpl();
    const flagReview = new FlagReview(reviewRepo, auditService);
    const review = await flagReview.execute({ reviewId, userId: req.userId, userRole: req.userRole, reason });

    return res.status(200).json({ success: true, data: review });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.moderateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { action, note } = req.body;
    const reviewRepo = new ReviewRepoImpl();
    const moderateReview = new ModerateReview(reviewRepo, auditService);
    const review = await moderateReview.execute({ reviewId, userId: req.userId, userRole: req.userRole, action, note });

    return res.status(200).json({ success: true, data: review });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.getThreadQueue = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const status = req.query.status || ReviewStatus.PENDING;
    const search = req.query.search || '';

    const threadRepo = new ThreadRepoImpl();
    const getThreadQueue = new GetThreadQueue(threadRepo);
    const threads = await getThreadQueue.execute({ page, limit, status, search });
    return res.status(200).json({ success: true, data: threads });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.moderateThread = async (req, res) => {
  try {
    const threadId = req.params.id;
    const { action, note } = req.body;
    const threadRepo = new ThreadRepoImpl();
    const moderateThread = new ModerateThread(threadRepo, auditService);
    const thread = await moderateThread.execute({ threadId, userId: req.userId, userRole: req.userRole, action, note });

    return res.status(200).json({ success: true, data: thread });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const status = req.query.status;
    const assignedTo = req.query.assignedTo;

    const reportRepo = new ReportRepoImpl();
    const getReports = new GetReports(reportRepo);
    const reports = await getReports.execute({ status, assignedTo, page, limit });
    return res.status(200).json({ success: true, data: reports });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.assignReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const { assignedTo } = req.body;

    const reportRepo = new ReportRepoImpl();
    const assignReport = new AssignReport(reportRepo, auditService);
    const report = await assignReport.execute({ reportId, assignedTo, userId: req.userId, userRole: req.userRole });

    return res.status(200).json({ success: true, data: report });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.resolveReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const { resolution, escalateToAdmin } = req.body;

    const reportRepo = new ReportRepoImpl();
    const resolveReport = new ResolveReport(reportRepo, auditService);
    const report = await resolveReport.execute({ reportId, resolution, escalateToAdmin, userId: req.userId, userRole: req.userRole });

    return res.status(200).json({ success: true, data: report });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.banUser = async (req, res) => {
  try {
    const targetId = req.params.id;
    const { reason, until } = req.body;

    const userRepo = new UserRepoImpl();
    const banUser = new BanUser(userRepo, auditService);
    const user = await banUser.execute({ targetId, reason, until, userId: req.userId, userRole: req.userRole });

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};

exports.unbanUser = async (req, res) => {
  try {
    const targetId = req.params.id;

    const userRepo = new UserRepoImpl();
    const unbanUser = new UnbanUser(userRepo, auditService);
    const user = await unbanUser.execute({ targetId, userId: req.userId, userRole: req.userRole });

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error.message });
  }
};
