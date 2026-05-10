const assert = require('assert');
const moderationConstants = require('../shared/utils/moderationConstants');

try {
  assert.deepStrictEqual(moderationConstants.ReviewStatus, {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
    HIDDEN: 'hidden'
  });
  assert.deepStrictEqual(moderationConstants.ReportStatus, {
    OPEN: 'open',
    ESCALATED: 'escalated',
    RESOLVED: 'resolved'
  });
  console.log('moderation constants test passed');
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
