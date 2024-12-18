function filterQueryMiddleware(req, res, next) {
   const search = req.query.search || '';
   const page = parseInt(req.query.page, 10) || 1;
   const limit = parseInt(req.query.size, 10) || 10;

   req.filter = {
      search,
      page,
      limit,
   };

   next();
}

module.exports = {
   filterQueryMiddleware
}
