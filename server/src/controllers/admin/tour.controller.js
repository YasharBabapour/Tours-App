const { Tour, Reserve, User } = require("../../models");

class AdminTourController {
   static async createTour(req, res) {
      try {
         const { subject, leader_full_name, capacity, description, start_date, end_date, price } = req.body;

         const tour = new Tour({
            subject,
            description,
            start_date,
            end_date,
            price,
            leader_full_name,
            capacity
         });

         await tour.save();

         res.json({ message: 'Tour created successfully', tour });
      } catch (error) {
         console.error('Error creating tour:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   static async getTour(req, res) {
      try {
         const { tourId } = req.params;

         const tour = await Tour.getFilledCapacity(tourId);

         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }
         let reservations = await Reserve.find({ tour_id: tourId })
         res.json({ tour, reservations });
      } catch (error) {
         console.error('Error getting tour:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   static async updateTour(req, res) {
      try {
         const { tourId } = req.params;
         const { subject, leader_full_name, description, start_date, end_date, price } = req.body;

         const tour = await Tour.findByIdAndUpdate(
            tourId,
            { subject, leader_full_name, description, start_date, end_date, price },
            { new: true }
         );

         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }

         res.json({ message: 'Tour updated successfully', tour });
      } catch (error) {
         console.error('Error updating tour:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   static async deleteTour(req, res) {
      try {
         const { tourId } = req.params;

         const tour = await Tour.findByIdAndDelete(tourId);

         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }
         const ret = await Reserve.deleteMany({
            tour_id: tour._id
         })

         res.json({ message: 'Tour deleted successfully', tour, reservedCountDeleted: ret.deletedCount });
      } catch (error) {
         console.error('Error deleting tour:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   static async getTours(req, res) {
      try {
         const tours = await Tour.find();

         res.json({ tours });
      } catch (error) {
         console.error('Error getting tours:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }
}

module.exports = AdminTourController;
