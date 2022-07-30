'use strict'

const getResumeFromS3 = async (event, context) => {
  console.log('event:', JSON.stringify(event, null, 2))
  
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda is warm!'
  }
  
  const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
  const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
  
  const s3Client = new S3Client({})
  const stage = process.env.STAGE
  const resumeBucket = stage === 'prod' ? 'ryan-token-resume-prod' : 'ryan-token-resume-dev'
  
  let response = {
    statusCode: 200,
    body: {}
  }
  
  const s3Params = {
    Bucket: resumeBucket,
    Key: 'Ryan Token Resume.pdf'
  }
  const s3GetSignedUrlCommand = new GetObjectCommand(s3Params)
  
  try {
    const signedUrlForResume = await getSignedUrl(s3Client, s3GetSignedUrlCommand, { expiresIn: 604800 })
    response.body = signedUrlForResume
  } catch(err) {
    console.error('error getting signed URL for resume:', err)
    context.captureError(err)
    response.statusCode = 500
    response.body = 'error: unable to get signed URL for resume'
    return response
  }
  
  response.body = JSON.stringify(response.body, null, 2)
  return response
}

module.exports = {
  getResumeFromS3
}