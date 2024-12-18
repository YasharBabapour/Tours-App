const { paginateResults } = require("../../helper/pagination.helper");
const { Reserve, Tour } = require("../../models");

class AdminReserveController {
   async getReserves(req, res) {
      const { page, limit } = req.filter

      try {
         const result = await paginateResults(Reserve, page, limit)
         res.send(result);
      } catch (error) {
         console.error('Error getting reserves:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async getReservationDetails(req, res) {
      try {
         const reserveId = req.params.reserveId;
         const reservation = await Reserve.findById(reserveId);
         if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
         }
         const totalCost = reservation.counts * reservation.total_cost;
         res.json({ reservation, totalCost });
      } catch (error) {
         console.error('Error getting reservation details:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async getReservationsByTour(req, res) {
      try {
         const tourId = req.params.tourId;
         const tour = await Tour.getFilledCapacity(tourId);

         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }

         const reservations = await Reserve.find({ tour_id: tourId });
         const totalCosts = reservations.reduce((sum, reservation) => sum + (reservation.counts * reservation.total_cost), 0);
         res.json({ reservations, totalCosts });
      } catch (error) {
         console.error('Error getting reservations by tour ID:', error);
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async getReservationsByUser(req, res) {
      try {
         const userId = req.params.userId;
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

module.exports = new AdminReserveController();
