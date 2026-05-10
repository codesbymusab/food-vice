class GetReviewQueue {
    constructor(reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    async execute({ page = 1, limit = 20, status, search = '' }) {
        return await this.reviewRepo.getPending(limit, { status, search });
    }
}

module.exports = GetReviewQueue;