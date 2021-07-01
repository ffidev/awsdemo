const AWS = require('aws-sdk');
const fs = require('fs');

const filePath = './data/PayslipFRE27272.pdf';
const bucketName = 'eservefiles';
const key = 'payslip/Oct 2021/PayslipFRE27272.pdf';

var s3 = new AWS.S3();

const downloadFile = (filePath, bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key
  };
  s3.getObject(params, (err, data) => {
    if (err) { console.error(err); }
    else {
      fs.writeFileSync(filePath, data.Body.toString());
      console.log(`${filePath} has been created!`);
    }

  });
};

downloadFile(filePath, bucketName, key);