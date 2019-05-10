const userService = require('../services/user');

exports.register = async (req, res) => {
  // Todo - add request validation
  const user = await userService.saveUser(req.body);
  const { username, email, firstName, lastName } = user;
  res.status(201).json({ username, email, firstName, lastName });
};

exports.getUser = async (req, res) => {
  const user = await userService.fetchUser(req.params.id);
  if (!user) {
    res.status(404).json({ message: 'Not User Found' });
  }
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  // Todo - add request validation
  const user = await userService.updateUser(req.params.id, req.file, req.body);
  if (!user) {
    res.status(404).json({ message: 'Not User Found' });
  }
  res.status(200).json(user);
};
