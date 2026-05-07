const express = require('express');
const router = express.Router();
const multer = require('multer');
const firebaseStorage = require('../../infrastructure/services/FirebaseStorage/FirebaseStorageService');
const { verifyAuth } = require('../middlewares/authMiddleware');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

router.post('/', verifyAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const folder = req.query.folder || 'general';
    const imageUrl = await firebaseStorage.uploadFile(req.file, folder);
    
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Upload failed', error: error.message });
  }
});

module.exports = router;
