const router = require('express').Router();

const loginController = require('../controllers/loginController');

router.post('/auth',loginController.login);
router.get('/login', (req, res) => {
    res.render('login');
  });
module.exports= router;