'use strict'

const getCvFromS3 = async (event, context) => {
  console.log('event:', JSON.stringify(event, null, 2))
  
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda is warm!'
  }
  
  const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
  const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
  
  const s3Client = new S3Client({})
  const stage = process.env.STAGE
  const cvBucket = stage === 'prod' ? 'ryan-token-cv-prod' : 'ryan-token-cv-dev'
  
  let response = {
    statusCode: 200,
    body: {}
  }
  
  const s3Params = {
    Bucket: cvBucket,
    Key: 'Ryan Token CV.pdf'
  }
  const s3GetSignedUrlCommand = new GetObjectCommand(s3Params)
  
  try {
    const signedUrlForCv = await getSignedUrl(s3Client, s3GetSignedUrlCommand, { expiresIn: 604800 })
    response.body = signedUrlForCv
  } catch(err) {
    console.error('error getting signed URL for CV:', err)
    context.captureError(err)
    response.statusCode = 500
    response.body = 'error: unable to get signed URL for CV'
    return response
  }
  
  response.body = JSON.stringify(response.body, null, 2)
  return response
}

module.exports = {
  getCvFromS3
}