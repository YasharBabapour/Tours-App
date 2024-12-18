const { paginateResults } = require("../../helper/pagination.helper");
const { hashPassword } = require("../../helper/password.helper");
const { User, Reserve } = require("../../models");

class AdminUserController {
   async createUser(req, res) {
      try {
         const { username, email, password, role } = req.body;

         const existingUser = await User.findOne({
            $or: [{ username }, { email }]

         });

         if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
         }

         const hashedPassword = await hashPassword(password);

         const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role
         });
         const savedUser = await newUser.save();
         res.status(201).json(savedUser);
      } catch (error) {
         res.status(500).json({ error: error });
      }
   }

   async updateUser(req, res) {
      try {
         const { userId } = req || req.params;
         const { username, email, password, role } = req.body;
         const data = {}
         if (username) data.username = username
         if (email) data.email = email
         if (role) data.role = role

         if (password) {
            const hashedPassword = await hashPassword(password)
            data.password = hashedPassword
         }
         console.log(data, userId)
         const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true });

         if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
         }
         await updatedUser.save()

         res.json(updatedUser);
      } catch (error) {
         console.log(error)
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async getUser(req, res) {
      try {
         const { userId } = req.params || req;
         const user = await User.findById(userId);
         if (!user) {
            return res.status(404).json({ error: 'User not found' });
         }
         res.json(user);
      } catch (error) {
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async deleteUser(req, res) {
      try {
         const { userId } = req.params;
         const deletedUser = await User.findByIdAndDelete(userId);
         if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
         }
         await Reserve.deleteMany({
            user_id: userId
         })
         res.json({ message: 'User deleted successfully' });
      } catch (error) {
         res.status(500).json({ error: 'Internal server error' });
      }
   }

   async getAllUsers(req, res) {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      try {
         const result = await paginateResults(User, page, limit)

         res.json(result);

      } catch (error) {
         console.log(error)
         res.status(500).json({ error: 'Internal server error' });
      }
   }
   changeRole = async (req, res) => {
      const authUuserId = req.userId
      const userId = req.params.userId
      const role = req.body.role

      if (authUuserId == userId) {
         return res.status(400).send({ error: "You Can not Your Role Status" })
      }

      try {

         const user = await User.findByIdAndUpdate(userId,
            { role },
            { new: true }
         )

         res.send({ user })

      } catch (error) {
         res.status(500).json({ error: 'Internal server error' });
      }

   }
}

module.exports = new AdminUserController();
