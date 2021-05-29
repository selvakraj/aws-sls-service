import AWS from 'aws-sdk';

const s3 = new AWS.S3();


async function getJsonData(event, context) {
    const { id } = event.pathParameters;

    console.log(id);
    console.log(process.env.FACULTY_BUCKET_NAME);

    const data = await s3.getObject(
        {   Bucket: process.env.FACULTY_BUCKET_NAME, 
            Key: "sample.json",
        }).promise();
  

    return {
      statusCode: 200,
      body: data.Body.toString('utf-8'),
    };
  }
  
  export const handler = getJsonData;