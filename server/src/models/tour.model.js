const mongoose = require('mongoose');
const { capacityPiplines } = require('./piplines');
const Schema = mongoose.Schema;


const tourSchema = new Schema({
   leader_full_name: { type: String, required: true },
   subject: { type: String, required: true },
   description: { type: String, required: true },
   start_date: { type: Date, required: true },
   end_date: { type: Date, required: true },
   capacity: { type: Number, required: true },
   price: {
      type: Number,
      required: true,
   },
   avatar: { type: String }
});


tourSchema.statics.getFilledCapacity = async function (tourId) {
   const _id = new mongoose.Types.ObjectId(tourId)
   return Tour.aggregate([{ $match: { _id } }, ...capacityPiplines, { $limit: 1 },])
      .then((result) => (result && result.length ? result[0] : null))
      .catch((error) => {
         console.error('Error retrieving filled capacity:', error);
         return null;
      });

};

tourSchema.statics.aggregateWithCapacity = (skip, limit) => Tour.aggregate([
   ...capacityPiplines,
   { $skip: parseInt(skip) },
   { $limit: parseInt(limit) },
]);

const Tour = mongoose.model('tours', tourSchema);


module.exports = {
   Tour,
   tourSchema
};
