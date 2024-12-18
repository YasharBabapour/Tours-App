
const config = {
   dbConnection: {
      baseUrl: process.env.BASE_URL || 'mongodb',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 27017,
      database: process.env.DATABASE || 'table',
   },
   admin: {
      username: process.env.ADMIN_USERNAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
   },
   jwt: {
      secret_ky: process.env.SECRETKEY || 'XXX'
   },
};

module.exports = config;
