const AWS = require('aws-sdk');
const fs = require('fs');

var s3 = new AWS.S3();
AWS.config.update({  
  region: 'us-east-1'
});

const filePath = './data/data.json';
const bucketName = 'eservefiles';
const key = 'data/data.json';

const uploadFile = (filePath, bucketName, key) => {
  fs.readFile(filePath, (err, data) => {
    if (err) console.error(err);
    var base64data = new Buffer(data, 'binary');
    var params = {
      Bucket: bucketName,
      Key: key,
      Body: base64data
    };
    s3.upload(params, (err, data) => {
      if (err) console.error(`Upload Error ${err}`);
      else console.log('Upload Completed');
      console.log("end");
    });
  });
};

uploadFile(filePath, bucketName, key);