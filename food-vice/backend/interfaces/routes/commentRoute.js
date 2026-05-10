const express = require("express");

const commCntrl = require("../controllers/commentController");

const router = express.Router();


router.get("/:reelId", commCntrl.getComments);
router.post("/:reelId",commCntrl.postComment)




module.exports = router;
