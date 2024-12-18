const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = async (password) => {
   try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
   } catch (error) {
      throw new Error('Error hashing password');
   }
};

const comparePassword = async (password, hashedPassword) => {
   try {
      console.log(password, hashedPassword)
      const match = await bcrypt.compare(password, hashedPassword);
      return !!match;
   } catch (error) {
      return false
   }
};

module.exports = {
   hashPassword,
   comparePassword,
};
