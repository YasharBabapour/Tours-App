const mongoose = require('mongoose');
const { dbConnection: dbConfig } = require('./env.config');

const databaseURI = `${dbConfig.baseUrl}://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

async function connectToDatabase() {
   console.log('Database URI:', databaseURI);

   try {
      await mongoose.connect(databaseURI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('Connected to the database');
   } catch (error) {
      console.error('Database connection error:', error);
   }
}

connectToDatabase();

module.exports = mongoose.connection;
