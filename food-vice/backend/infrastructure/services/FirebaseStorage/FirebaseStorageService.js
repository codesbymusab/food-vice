const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

const serviceAccountPath = path.join(__dirname, '../../../../serviceAccountKey.json');

let bucket = null;

if (fs.existsSync(serviceAccountPath)) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    storageBucket: "food-vice.appspot.com" // User should update this
  });
  bucket = admin.storage().bucket();
} else {
  console.warn("Firebase Service Account Key not found at", serviceAccountPath);
  console.warn("Image uploads will be mocked with placeholders.");
}

class FirebaseStorageService {
  async uploadFile(file, folder = 'uploads') {
    if (!bucket) {
      console.log("Mocking upload for file:", file.originalname);
      return "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYG0bVKf_mclqimLqSr6rZtJS4UoFX9tJ-Vro7BqKdmx9jBFPPOO2DRpxN7gdjB72_eniNp_sUQPxq4V-UQBNOrnQlzo3ftqm0Jj5Sf9zEHlPApapd-rWsAHREzkweiTw_N_WvscKo9qp4O25UDCACwS_txbuqFQj1NGDpk-VtMP_wUjh_PhLQlBEGKgjLOeBMdo-7jfYUpxalfn0x8m8_EhwUv2ZIM0DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq";
    }

    const fileName = `${folder}/${Date.now()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (error) => {
        reject(error);
      });

      blobStream.on('finish', async () => {
        await fileUpload.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
        resolve(publicUrl);
      });

      blobStream.end(file.buffer);
    });
  }
}

module.exports = new FirebaseStorageService();
