const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://foodvice-838f6.firebasestorage.app" 
});

const bucket = admin.storage().bucket();

module.exports = { admin, bucket };
