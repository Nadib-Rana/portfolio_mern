
//HRM-BAEKEND secret.ts



require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 5000;
const mongodbUrl = process.env.MONGO_URI;

const jwtActivationKey = process.env.JWT_ACTIVATION_KEY;
const jwtAccessKey = process.env.JWT_ACCESS_KEY;
const jwtRefreshKey = process.env.JWT_REFRESH_KEY;
const jwtResetPasswordKey = process.env.JWT_RESET_PASSWORD_KEY;


const smtpUserName = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;

const privateKey = process.env.VAPID_PRIVATE_KEY;
const publicKey = process.env.VAPID_PUBLIC_KEY;



module.exports = { serverPort, mongodbUrl, jwtActivationKey,  jwtAccessKey, jwtRefreshKey, smtpUserName, smtpPassword, privateKey, publicKey}; 
 