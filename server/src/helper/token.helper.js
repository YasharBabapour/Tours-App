const jwt = require('jsonwebtoken');
const config = require('../config/env.config');

const generateToken = (payload = {}) => {
   return jwt.sign(payload, config.jwt.secret_ky, {});
};

const decodeToken = (token) => {
   try {
      const decoded = jwt.verify(token, config.jwt.secret_ky);
      return decoded;
   } catch (error) {
      throw new Error('Invalid token');
   }
};

module.exports = {
   generateToken,
   decodeToken,
};
