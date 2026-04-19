
class GetUser {

    constructor(userRepo) {
        this.userRepo = userRepo;
    }

    async execute(data) {

        if (!data.userId) {
            throw new Error("User Id required");
        }


        const user = await this.userRepo.getById(data.userId);
     
        if (user) {
            return {
                user: {
                    userId: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email
                }

            }
        }

        throw new Error('User not found')

    }
}

module.exports = GetUser;