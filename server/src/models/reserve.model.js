const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserveSchema = new Schema({
   user_id: {
      type: Schema.Types.ObjectId,
      ref: 'USER',
      required: true
   },
   tour_id: {
      type: Schema.Types.ObjectId,
      ref: 'TOUR',
      required: true
   },
   name_of_registrant: { type: String, required: true },
   counts: { type: Number, required: true },
   total_cost: { type: Number, required: true }
});

const Reserve = mongoose.model('reserves', reserveSchema);

module.exports = {
   Reserve
};
