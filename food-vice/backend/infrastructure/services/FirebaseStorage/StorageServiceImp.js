const {bucket} = require('./config')

class StorageServiceImpl {

  async uploadFile(file, folder = "uploads") {
    if (!bucket) {
      console.log("Mocking upload for file:", file.originalname);
      // Return a placeholder image URL
      return "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYG0bVKf_mclqimLqSr6rZtJS4UoFX9tJ-Vro7BqKdmx9jBFPPOO2DRpxN7gdjB72_eniNp_sUQPxq4V-UQBNOrnQlzo3ftqm0Jj5Sf9zEHlPApapd-rWsAHREzkweiTw_N_WvscKo9qp4O25UDCACwS_txbuqFQj1NGDpk-VtMP_wUjh_PhLQlBEGKgjLOeBMdo-7jfYUpxalfn0x8m8_EhwUv2ZIM0DcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq";
    }

    const filename = `${folder}/${Date.now()}-${file.originalname}`;
    const blob = bucket.file(filename);

    await blob.save(file.buffer, {
      metadata: { contentType: file.mimetype }
    });

    
    const [url] = await blob.getSignedUrl({
      action: "read",
      expires: "03-09-2030" 
    });

    return url;
  }
}

module.exports = StorageServiceImpl
