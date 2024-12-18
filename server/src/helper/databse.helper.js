// collectionCreator.js

const mongoose = require('mongoose');
const { User, Reserve, Tour } = require('../models');

mongoose.connect('mongodb://localhost:27017/tour', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

async function createCollections() {
   const collections = await mongoose.connection.db.listCollections().toArray();

   if (!collections.some((coll) => coll.name === 'users')) {
      await User.createCollection();
      console.log('Users collection created');
   }

   if (!collections.some((coll) => coll.name === 'tours')) {
      await Tour.createCollection();
      console.log('Tours collection created');
   }

   if (!collections.some((coll) => coll.name === 'reserves')) {
      await Reserve.createCollection();
      console.log('Reserves collection created');
   }
}

async function generateDummyData() {
   const users = [];
   for (let i = 1; i <= 10; i++) {
      const user = new User({
         username: `user${i}`,
         email: `user${i}@example.com`,
         password: 'password123',
         role: 'USER',
      });
      users.push(user);
   }
   await User.insertMany(users);
   console.log('Dummy users created');

   const tours = [];
   for (let i = 1; i <= 10; i++) {
      const tour = new Tour({
         leader_full_name: `Leader ${i}`,
         subject: `Tour ${i}`,
         description: `Description for Tour ${i}`,
         start_date: new Date(),
         end_date: new Date(),
         capacity: 20,
         cost_for_one: 100,
         avatar: 'tour_avatar.jpg',
      });
      tours.push(tour);
   }
   await Tour.insertMany(tours);
   console.log('Dummy tours created');

   const reserves = [];
   const allUsers = await User.find();
   const allTours = await Tour.find();

   for (let i = 0; i < 20; i++) {
      const user = allUsers[Math.floor(Math.random() * allUsers.length)];
      const tour = allTours[Math.floor(Math.random() * allTours.length)];

      const reserve = new Reserve({
         user_id: user._id,
         tour_id: tour._id,
         name_of_registrant: user.username,
         counts: 2,
         total_cost: 200,
      });

      reserves.push(reserve);
   }

   await Reserve.insertMany(reserves);
   console.log('Dummy reserves created');
}

async function run() {
   try {
      await createCollections();
      await generateDummyData();
      mongoose.connection.close();
      console.log('Database setup completed');
   } catch (error) {
      console.error('Database setup error:', error);
   }
}
mongoose.connection.on('connected', () => {
   console.log('Connected to the database');
   run();
});

mongoose.connection.on('error', (error) => {
   console.error('Database connection error:', error);
});

