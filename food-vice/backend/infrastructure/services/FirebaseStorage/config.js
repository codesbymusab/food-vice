const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
let bucket = null;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://foodvice-838f6.firebasestorage.app" 
  });
  bucket = admin.storage().bucket();


module.exports = { admin, bucket };
