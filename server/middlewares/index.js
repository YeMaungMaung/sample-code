const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

exports.requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('Unauthorized');
  }
  jwt.verify(authorization, JWT_SECRET, function(err) {
    if (err) {
      console.log(err);
      return res.status(401).send('Unauthorized');
    }
  });
  next();
};
