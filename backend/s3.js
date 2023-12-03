const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
});

// Create an S3 instance
// const s3 = new AWS.S3();

// console.log('s3 file')
// const imageBuffer = fs.readFileSync('/home/shashank/Desktop/project/farmkart/backend/s31.png');

// const bucketParams = {
//     Bucket: 'shashank-056',
//   };

//   const uploadParams = {
//     Bucket: 'shashank-056',
//     Key: 'image3', // The name of the object in the bucket
//     Body: imageBuffer,
//     ACL: 'public-read'
//   };
  
  
  // const s3_upload_return_data = s3.putObject(uploadParams, (err, data) => {
  //   if (err) {
  //     console.error('Error uploading object:', err);
  //   } else {
  //     // console.log('Image uploaded successfully. Location:', data);
  //     // const publicUrl = data.Location;
  //   // Use this public URL to access the uploaded file from the internet
  //   // console.log('Public URL:', publicUrl);
  //   }
  // });
  // console.log('s3_upload_return_data ===',s3_upload_return_data)

  // const params = {
  //   Bucket: 'shashank-056',
  //   Key: 'image3'
  // };


  // s3.getSignedUrl('getObject', params, function(err, url) {
  //   if (err) {
  //     console.error('Error generating object URL:', err);
  //   } else {
  //     console.log('Object URL:', url);
  //     // Use this URL to access the object for the specified time period
  //   }
  // });

  // const downloadParams = {
  //   Bucket: 'shashank-056',
  //   Key: 'image2', // The name of the object in the bucket
  // };
  
  // s3.getObject(downloadParams, (err, data) => {
  //   if (err) {
  //     console.error('Error downloading object:', err);
  //   } else {
  //     console.log('Object content:', data.Body.toString());
  //   }
  // });
  
  
