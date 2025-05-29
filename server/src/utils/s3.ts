import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadFileToS3 = async (file: Express.Multer.File): Promise<string> => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: `uploads/${Date.now()}-${file.originalname}`, 
    Body: file.buffer, 
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  const uploadResult = await s3.upload(params).promise();
  return uploadResult.Location;
};
