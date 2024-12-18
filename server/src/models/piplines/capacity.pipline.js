const capacityPiplines = [
   {
      $lookup: {
         from: 'reserves',
         localField: '_id',
         foreignField: 'tour_id',
         as: 'reserves',
      },
   },
   {
      $project: {
         _id: 1,
         avatar: 1,
         title: 1,
         description: 1,
         capacity: 1,
         start_date: 1,
         end_date: 1,
         subject: 1,
         fill_capacity: {
            $ifNull: [{ $sum: '$reserves.counts' }, null]
         },
      },
   },
]

module.exports = capacityPiplines