const { decodeToken } = require('../helper/token.helper');
const { User } = require('../models');

const authenticatedUser = async (req, res, next) => {
   const token = req.headers.authorization;

   if (!token)
      return res.status(401).json({ error: "Token is Invalid" });

   try {
      let user = decodeToken(token)
      req.userId = user.userId
      user = await User.findById(user.userId)
      req.user = user

      next();
   } catch (error) {
      console.log(error)
      return res.status(401).json({ error });
   }
};

const adminRole = async (req, res, next) => {
   if (req.user.role != "ADMIN") {
      return res.status(403).send({
         error: "Access Denied!"
      })
   }
   next()
}
module.exports = {
   authenticatedUser,
   adminRole
};