const { paginateAggregateResults } = require('../helper/pagination.helper');
const { Tour } = require('../models');

class TourController {
   async getTourById(req, res) {
      try {
         const { id } = req.params;

         const tour = await Tour.getFilledCapacity(id);

         if (!tour) {
            return res.status(404).json({ message: 'Tour not found' });
         }

         res.json(tour);
      } catch (error) {
         console.log(error)
         console.error('Get tour by ID error:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   async getTours(req, res) {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      try {
         const result = await paginateAggregateResults(
            Tour,
            Tour.aggregateWithCapacity,
            {
               page, limit
            }
         )

         res.json(result);
      } catch (error) {
         console.error('Get tours error:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   async getTopTours(req, res) {
      try {
         const topTours = await Tour.find({}).limit(3);

         res.json(topTours);
      } catch (error) {
         console.error('Get top tours error:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }
}

module.exports = TourController;
