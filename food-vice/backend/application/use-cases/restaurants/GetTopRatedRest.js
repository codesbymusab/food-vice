const { isRestaurantOpen } = require("../../../shared/utils/isRestaurantOpen");
const { openingTime } = require("../../../shared/utils/openingTime");

class GetTopRatedyRestaurants {


    constructor(restaurantRepo, mediaRepo) {

        this.restaurantRepo = restaurantRepo;
        this.mediaRepo = mediaRepo
    }

    async execute(data) {

        if (!data.location) {
            throw new Error('Location is required')
        }


        const result = await this.restaurantRepo.getTopRated(data.location,data.filters)

        if (result) {



            for (let i = 0; i < result.length; i++) {


                const media = await this.mediaRepo.getByOwnerId(result[i]._id)
                console.log(media)
                if (media) {
                    result[i]['media'] = media
                }
                const isOpen = isRestaurantOpen(result[i]['openingHours'])

                result[i]['isOpen'] = isOpen

                const time = openingTime(result[i]['openingHours'])
                if (time) {
                    result[i]['openingTime'] = time
                }
            }
        }
        return result

    }


}

module.exports = GetTopRatedyRestaurants