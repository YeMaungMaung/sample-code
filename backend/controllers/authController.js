const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const { JWT_SECRET } = process.env;

exports.login = async (req, res) => {
  // todo - add request validation
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: 'Not User Found' });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    res.status(400).json({ message: 'Invalid Email or Password' });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.status(200).json({ token, id: user._id, firstName: user.firstName });
};
