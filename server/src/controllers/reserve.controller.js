const { Reserve, Tour, User } = require("../models");

class ReserveController {
   async cancelReservation(req, res) {
      try {
         const userId = req.userId;
         const { reserveId } = req.params;

         const reservation = await Reserve.findById(reserveId);


         if (!reservation || reservation.user_id != userId) {
            return res.status(404).json({ message: 'Reservation not found' });
         }
         const ret = await reservation.deleteOne()
         const user = await User.findById(ret.user_id, 'username email')
         const tour = await Tour.findById(ret.tour_id)

         res.json({
            user,
            tour,
            message: 'Reservation canceled successfully'
         });
      } catch (error) {
         console.error('Error canceling reservation:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   async createReservation(req, res) {
      try {
         const userId = req.userId;
         const { tourId } = req.params;
         const { name_of_registrant, counts } = req.body;

         const tour = await Tour.getFilledCapacity(tourId);
         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }
         if (counts < 1) {
            return res.status(400).json({ message: "counts mus grater than 0" })
         }
         const total_cost = tour.price * counts || counts * 1000

         const fill_counts = await Reserve.count({ tour_id: tourId })
         if (fill_counts + counts > tour.capacity) {
            return res.status(400).send({ error: `capacity can not fill count : ${counts}` })
         }

         const reservation = new Reserve({
            user_id: userId,
            tour_id: tourId,
            name_of_registrant,
            counts,
            total_cost,
         });

         await reservation.save();

         res.json({
            message: 'Reservation created successfully',
            reservation
         });
      } catch (error) {
         console.error('Error creating reservation:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }
   async getMyReservations(req, res) {
      try {
         const userId = req.userId;

         const reservations = await Reserve.find({ user_id: userId });
         const totalCounts = reservations.reduce((sum, reservation) => sum + reservation.counts, 0);
         const totalCosts = reservations.reduce((sum, reservation) => sum + (reservation.counts * reservation.total_cost), 0);
         res.json({ reservations, totalCounts, totalCosts });
      } catch (error) {
         console.error('Error getting reservations by user ID:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   }
}


module.exports = new ReserveController();
