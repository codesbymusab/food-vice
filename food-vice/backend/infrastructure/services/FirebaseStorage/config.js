const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const serviceAccountPath = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
let bucket = null;

if (fs.existsSync(serviceAccountPath)) {
  const serviceAccount = require(serviceAccountPath);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://foodvice-838f6.firebasestorage.app" 
  });
  bucket = admin.storage().bucket();
} else {
  console.warn("WARNING: Firebase serviceAccountKey.json not found. Storage functionality will be limited.");
}

module.exports = { admin, bucket };
