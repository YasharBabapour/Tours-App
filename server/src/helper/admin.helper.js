const { User } = require('../models');
const { hashPassword } = require('./password.helper');
const { admin } = require('../config/env.config');

const createOrExistAdmin = async () => {
   try {
      let user = await User.findOne({
         username: admin.username
      })
      const password = await hashPassword(admin.password);
      if (!user) {
         user = new User({
            username: admin.username,
            email: admin.email,
            password,
            role: "ADMIN"
         })
         await user.save()
         return
      }
      else {

         await User.findOneAndUpdate(user._id, {
            username: admin.username,
            email: admin.email,
            password,
            role: "ADMIN"
         })
      }
      console.info("Admin Created Successfuly")
   }
   catch (error) {
      console.log(error)
      console.info("Admin Creation Fault")

   }

}

module.exports = {
   createOrExistAdmin
}