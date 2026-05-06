// testUploadReels.js
const fs = require("fs");
const path = require("path");

const MediaRepoImpl = require("./infrastructure/database/mongodb/repositories/MediaRepoImpl");
const StorageServiceImpl = require("./infrastructure/services/FirebaseStorage/StorageServiceImp");
const ReelRepoImpl = require("./infrastructure/database/mongodb/repositories/ReelRepoImpl");
const UploadReel = require("./application/use-cases/reels/UploadReel");

// Hardcoded metadata for each reel file
const reelsData = {
  "1.mp4": {
    title: "Philadelphia Cheesesteak Sandwiches",
    description: "Juicy beef and melted cheese — authentic Philly cheesesteak vibes captured in Lahore.",
    tags: ["trending", "shorts", "ytshorts", "youtubeshorts", "food", "lahore", "vlog"]
  },
  "2.mp4": {
    title: "The Best Gulab Jamun by Usman Sweets",
    description: "Soft, syrupy Gulab Jamun from Usman Sweets Township Lahore — a dessert lover’s dream.",
    tags: ["food", "foodie", "shorts"]
  },
  "3.mp4": {
    title: "HN Foods Authentic Desi Cuisine",
    description: "Authentic Desi flavors served fresh at HN Foods Lahore.",
    tags: ["food", "desi", "lahore", "authentic"]
  },
  "4.mp4": {
    title: "Lal Qila Restaurant Lahore",
    description: "Grand dining experience at Lal Qila Lahore — Lahori food, street food vibes, and viral taste.",
    tags: ["lahore", "lahorifood", "food", "foodie", "viral", "shorts", "streetfood"]
  },
  "5.mp4": {
    title: "ETEN Fine Dining Lahore",
    description: "ETEN offers the best economical fine dining in Lahore — quality meets affordability.",
    tags: ["shorts", "food", "lahore"]
  },
  "6.mp4": {
    title: "Haveli Restaurant Lahore",
    description: "Traditional Lahori cuisine with stunning views at Haveli Restaurant Lahore.",
    tags: ["haveli", "lahore", "shorts"]
  },
  "7.mp4": {
    title: "Best Momos in Lahore",
    description: "Discover the tastiest Momos in Lahore — a fusion of flavors loved by locals.",
    tags: ["momos", "lahore", "food", "streetfood"]
  },
  "8.mp4": {
    title: "Chinese Food Hits Different at The Great Blend",
    description: "Bold Chinese flavors at The Great Blend, Valencia Lahore — food that truly hits different.",
    tags: ["food", "foodie", "shorts", "chinese", "lahore"]
  },
  "9.mp4": {
    title: "Ao Jashan Manaen at Jashan Restaurant",
    description: "Celebrate with friends and family at Jashan Restaurant Lahore — festive vibes and great food.",
    tags: ["jashan", "lahore", "restaurant", "food"]
  }
};

exports.testUploadReels= async () => {
 console.log('started')
  const mediaRepo = new MediaRepoImpl();
  const storageService = new StorageServiceImpl();
  const reelRepo = new ReelRepoImpl();
  const uploadReel = new UploadReel(mediaRepo, reelRepo, storageService);

  const folderPath = `C:/Users/kaptop collection/Downloads/Reels`;
  const files = fs.readdirSync(folderPath);

  const userId = "69e1f767bf83c83874c9ddf8"; // replace with valid ObjectId
console.log('loaded')
  for (const filename of files) {
    console.log('uploading')
    const filePath = path.join(folderPath, filename);
    const buffer = fs.readFileSync(filePath);

    const fakeFile = {
      originalname: filename,
      mimetype: "video/mp4",
      buffer,
    };

    const meta = reelsData[filename];
    if (!meta) {
      console.warn(`⚠️ No metadata found for ${filename}, skipping...`);
      continue;
    }

    console.log(`Uploading reel: ${meta.title}`);

    const media = await uploadReel.execute({
      userId,
      title: meta.title,
      description: meta.description,
      tags: meta.tags,
      file: fakeFile,
    });

    console.log("✅ Uploaded:", media);
  }
}


