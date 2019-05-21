const express = require('express');
const multer = require('multer');

const router = express.Router();

const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

const { requireAuth } = require('../middlewares');

const { catchErrors } = require('../handlers/errorHandlers');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/avatar');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get('/', (req, res) => res.json({ message: 'Hi, How are you?' }));
router.post('/register', catchErrors(usersController.register));
router.post('/login', catchErrors(authController.login));
router.get('/users/:id', requireAuth, catchErrors(usersController.getUser));
router.patch(
  '/users/:id',
  requireAuth,
  upload.single('image'),
  catchErrors(usersController.updateUser)
);

module.exports = router;
