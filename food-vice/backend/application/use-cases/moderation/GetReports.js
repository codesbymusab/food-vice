class GetReports {
    constructor(reportRepo) {
        this.reportRepo = reportRepo;
    }

    async execute({ status, assignedTo, page = 1, limit = 20 }) {
        return await this.reportRepo.getReports({ status, assignedTo, page, limit });
    }
}

module.exports = GetReports;