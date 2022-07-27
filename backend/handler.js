'use strict'

const AWS = require('aws-sdk')
const s3 = new AWS.S3()

const getResumeFromS3 = async (event, context) => {
  console.log('event:', JSON.stringify(event, null, 2))
  
  if (event.source === 'serverless-plugin-warmup') {
    return 'Lambda is warm!'
  }
  
  const stage = process.env.STAGE
  const resumeBucket = stage === 'prod' ? 'ryan-token-resume-prod' : 'ryan-token-resume-dev'
  
  let response = {
    statusCode: 200,
    body: {}
  }
  
  const s3Params = {
    Bucket: resumeBucket,
    Key: 'Ryan Token Resume.pdf',
    Expires: 604800 // max 7 days
  }
  
  try {
    const signedUrlForResume = s3.getSignedUrl("getObject", s3Params)
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