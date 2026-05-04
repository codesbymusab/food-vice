const express = require("express");
const multer = require("multer");
const reelCntrl = require("../controllers/reelController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("file"), reelCntrl.upload)
router.get("/recent", reelCntrl.getRecent);
router.get("/followers", reelCntrl.getFollowers);
router.get('/tags/popular', reelCntrl.getPopularTags)
router.post("/:reelId/view",reelCntrl.updateViews)



module.exports = router;
