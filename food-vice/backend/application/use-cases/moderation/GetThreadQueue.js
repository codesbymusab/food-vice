class GetThreadQueue {
    constructor(threadRepo) {
        this.threadRepo = threadRepo;
    }

    async execute({ page = 1, limit = 20, status, search = '' }) {
        return await this.threadRepo.getPending(limit, { status, search });
    }
}

module.exports = GetThreadQueue;