const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
});

// Create an S3 instance
const s3 = new AWS.S3();

console.log('s3 file')
const bucketParams = {
    Bucket: 'shashank-056',
  };

  const uploadParams = {
    Bucket: 'shashank-056',
    Key: 'example', // The name of the object in the bucket
    Body: 'Hello, AWS S3!',
  };
  
  s3.putObject(uploadParams, (err, data) => {
    if (err) {
      console.error('Error uploading object:', err);
    } else {
      console.log('Object uploaded successfully:', data);
    }
  });

  const downloadParams = {
    Bucket: 'shashank-056',
    Key: 'exampledownloads', // The name of the object in the bucket
  };
  
  s3.getObject(downloadParams, (err, data) => {
    if (err) {
      console.error('Error downloading object:', err);
    } else {
      console.log('Object content:', data.Body.toString());
    }
  });
  
  
