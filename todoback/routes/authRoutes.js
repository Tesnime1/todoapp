const express = require('express');
const { register, login, getAllUsers} = require('../controllers/authController');
const authCheck=require('../middleware/authCheck')

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers); 
router.get('/me', authCheck, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); 
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
  
module.exports = router;
