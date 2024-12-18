const { User } = require('../models');
const { hashPassword, comparePassword } = require('../helper/password.helper');
const { generateToken, decodeToken } = require('../helper/token.helper');

class AuthController {
   async signUp(req, res) {
      try {
         const { username, email, password } = req.body;

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
            role: 'USER',
         });

         await newUser.save();

         res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
         console.error('Sign up error:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }

   async login(req, res) {
      try {
         const { emailOrUsername, password } = req.body;

         const user = await User.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] });
         if (!user) {
            return res.status(401).json({ message: 'name or password is incorrect' });
         }

         const isPasswordValid = await comparePassword(password, user.password);
         if (!isPasswordValid) {
            return res.status(401).json({ message: 'name or password is incorrect' });
         }

         const token = generateToken({
            userId: user._id,
            email: user.email
         });

         res.status(200).json({ token });
      } catch (error) {
         console.error('Login error:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   }
   getProfile = async (req, res) => {
      try {

         const user = await User.findById(req.userId, '_id username email role');

         if (!user) {
            return res.status(404).json({ message: 'User not found' });
         }
         res.json({ authenticated_profile: user });
      } catch (error) {
         console.error('Error retrieving user profile:', error);
         res.status(500).json({ message: 'Internal server error' });
      }
   };


}

module.exports = AuthController;
