const Reel = require("../models/Reels/ReelModel");
const ReelTagModel = require("../models/Reels/ReelTagModel");
const mongoose = require('mongoose')

class ReelRepoImpl {

  async getReels(limit = 10, userId, source = "all") {
    const pipeline = [];


    if (source === "followers") {
      pipeline.push({
        $lookup: {
          from: "followers",
          let: { reelOwnerId: "$uid" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$followingId", "$$reelOwnerId"] },
                    { $eq: ["$followerId", new mongoose.Types.ObjectId(userId)] }
                  ]
                }
              }
            }
          ],
          as: "followerMatch"
        }
      });
      pipeline.push({
        $match: { $expr: { $gt: [{ $size: "$followerMatch" }, 0] } }
      });

      pipeline.push({
        $lookup: {
          from: "savedrestaurants",
          let: { reelRestaurantId: "$restaurantId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$restaurantId", "$$reelRestaurantId"] },
                    { $eq: ["$uid", new mongoose.Types.ObjectId(userId)] }
                  ]
                }
              }
            }
          ],
          as: "savedRestaurantMatch"
        }
      });
      pipeline.push({
        $match: { $expr: { $gt: [{ $size: "$savedRestaurantMatch" }, 0] } }
      });
    }

    // Common pipeline stages
    pipeline.push(
      { $sort: { createdAt: -1 } },
      { $limit: limit },

      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" },

      {
        $lookup: {
          from: "reeltags",
          localField: "tags",
          foreignField: "_id",
          as: "tags"
        }
      },

      {
        $lookup: {
          from: "reellikes",
          localField: "_id",
          foreignField: "reelId",
          as: "likes"
        }
      },

      {
        $lookup: {
          from: "reelcomments",
          localField: "_id",
          foreignField: "rid",
          as: "comments"
        }
      },

      {
        $lookup: {
          from: "savedreels",
          localField: "_id",
          foreignField: "reelId",
          as: "saves"
        }
      },

      {
        $lookup: {
          from: "media",
          let: { reelId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$ownerId", "$$reelId"] },
                    { $eq: ["$ownerType", "reel"] },
                    { $eq: ["$type", "video"] }
                  ]
                }
              }
            }
          ],
          as: "media"
        }
      },
      {
        $addFields: !userId ? 0 : {
          videoUrl: { $arrayElemAt: ["$media.url", 0] },
          likeCount: { $size: "$likes" },
          commentCount: { $size: "$comments" },
          saveCount: { $size: "$saves" },
          isLikedByUser: {
            $gt: [
              {
                $size: {
                  $filter: {
                    input: "$likes",
                    as: "like",
                    cond: { $eq: ["$$like.uid", new mongoose.Types.ObjectId(userId)] }
                  }
                }
              },
              0
            ]
          },
          isSavedByUser: {
            $gt: [
              {
                $size: {
                  $filter: {
                    input: "$saves",
                    as: "save",
                    cond: { $eq: ["$$save.uid", new mongoose.Types.ObjectId(userId)] }
                  }
                }
              },
              0
            ]
          }
        }
      },

      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          videoUrl: 1,
          createdAt: 1,
          views: 1,
          "user._id": 1,
          "user.name": 1,
          "user.username": 1,
          "user.profilePhoto": 1,
          tags: { _id: 1, name: 1 },
          likeCount: 1,
          commentCount: 1,
          saveCount: 1,
          isLikedByUser: 1,
          isSavedByUser: 1
        }
      }
    );

    return await Reel.aggregate(pipeline);
  }


  async findRecent(limit = 10, userId) {

    return await Reel.aggregate([

      { $sort: { createdAt: -1 } },
      { $limit: limit },


      {
        $lookup: {
          from: "users",
          localField: "uid",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" },


      {
        $lookup: {
          from: "reeltags",
          localField: "tags",
          foreignField: "_id",
          as: "tags"
        }
      },


      {
        $lookup: {
          from: "reellikes",
          localField: "_id",
          foreignField: "reelId",
          as: "likes"
        }
      },


      {
        $lookup: {
          from: "reelcomments",
          localField: "_id",
          foreignField: "rid",
          as: "comments"
        }
      },


      {
        $lookup: {
          from: "savedreels",
          localField: "_id",
          foreignField: "reelId",
          as: "saves"
        }
      },

      {
        $lookup: {
          from: "media",
          let: { reelId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$ownerId", "$$reelId"] },
                    { $eq: ["$ownerType", "reel"] },
                    { $eq: ["$type", "video"] }
                  ]
                }
              }
            }
          ],
          as: "media"
        }
      },

      {
        $addFields: {
          videoUrl: { $arrayElemAt: ["$media.url", 0] }
        }
      },
      {
        $addFields: {
          likeCount: { $size: "$likes" },
          commentCount: { $size: "$comments" },
          saveCount: { $size: "$saves" },
          isLikedByUser: {
            $gt: [
              {
                $size: {
                  $filter: {
                    input: "$likes",
                    as: "like",
                    cond: { $eq: ["$$like.uid", new mongoose.Types.ObjectId(userId)] }
                  }
                }
              },
              0
            ]
          },
          isSavedByUser: {
            $gt: [
              {
                $size: {
                  $filter: {
                    input: "$saves",
                    as: "save",
                    cond: { $eq: ["$$save.uid", new mongoose.Types.ObjectId(userId)] }
                  }
                }
              },
              0
            ]
          }
        }
      },


      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          videoUrl: 1,
          createdAt: 1,
          views: 1,
          "user._id": 1,
          "user.name": 1,
          "user.username": 1,
          "user.profilePhoto": 1,
          tags: { _id: 1, name: 1 },
          likeCount: 1,
          commentCount: 1,
          saveCount: 1,
          isLikedByUser: 1,
          isSavedByUser: 1
        }
      }
    ]);
  }


  async createReel({ title, description, tags, userId }) {

    const tagDocs = await Promise.all(
      JSON.parse(tags).map(async tagName => {
        let tag = await ReelTagModel.findOne({ name: tagName });
        if (!tag) tag = await ReelTagModel.create({ name: tagName });
        return tag._id;
      })
    );

    return await Reel.create({
      uid: userId,
      title,
      description,
      tags: tagDocs
    });
  }

  async getPopularTags(limit = 1) {


    return await Reel.aggregate([

      { $unwind: "$tags" },


      {
        $group: {
          _id: "$tags",
          usageCount: { $sum: 1 }
        }
      },


      {
        $lookup: {
          from: "reeltags",
          localField: "_id",
          foreignField: "_id",
          as: "tag"
        }
      },
      { $unwind: "$tag" },

      { $sort: { usageCount: -1 } },


      { $limit: limit },


      {
        $project: {
          _id: "$tag._id",
          name: "$tag.name",

        }
      }
    ]);
  }






}


module.exports = ReelRepoImpl;
