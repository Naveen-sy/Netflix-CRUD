const fs = require('fs');
require('dotenv').config();

const randomString = () => {
  return Math.random().toString(36).substring(2);
};


const secretKey = randomString() + randomString();


fs.writeFileSync('.env', `JWT_SECRET=${secretKey}`);
