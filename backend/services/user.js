const User = require('../models/User');

exports.saveUser = async data => {
  const user = await User.create(data);
  return user;
};

exports.fetchUser = async id => {
  const user = await User.findById(
    id,
    'username email firstName lastName avatar'
  );
  return user;
};

exports.updateUser = async (id, file, data) => {
  if (file !== undefined) {
    data.avatar = `avatar/${file.filename}`;
  }
  const user = await User.findOneAndUpdate({ _id: id }, data, {
    new: true, // return the new user instead of the old one
    runValidators: true,
  }).exec();
  return user;
};
