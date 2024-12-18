const paginateResults = async (model, page, limit) => {
   const startIndex = (page - 1) * limit;
   const endIndex = page * limit;

   try {
      const totalCount = await model.countDocuments();
      const results = {};

      if (endIndex < totalCount) {
         results.next = {
            page: page + 1,
            limit: limit
         };
      }

      if (startIndex > 0) {
         results.prev = {
            page: page - 1,
            limit: limit
         };
      }

      results.currentPage = page;
      results.totalPages = Math.ceil(totalCount / limit);

      results.data = await model.find()
         .skip(startIndex)
         .limit(limit);

      return results;
   } catch (error) {
      console.log(error)
      throw new Error('Pagination error');
   }
};
const paginateAggregateResults = async (model, aggregate = async () => { }, paginate = {}) => {
   const { page, limit } = paginate
   const startIndex = (page - 1) * limit;
   const endIndex = page * limit;

   try {
      const totalCount = await model.countDocuments();

      const results = {};

      if (endIndex < totalCount) {
         results.next = {
            page: page + 1,
            limit: limit
         };
      }

      if (startIndex > 0) {
         results.prev = {
            page: page - 1,
            limit: limit
         };
      }

      results.currentPage = page;
      results.totalPages = Math.ceil(totalCount / limit);

      results.data = await aggregate(page, limit)

      return results;
   } catch (error) {
      console.log(error)
      throw new Error('Pagination error');
   }
};

module.exports = {
   paginateResults,
   paginateAggregateResults
}
