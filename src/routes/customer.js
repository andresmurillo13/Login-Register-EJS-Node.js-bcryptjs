const router = require('express').Router();

const empleadosController = require('../controllers/empleadosController');

router.get('/', empleadosController.list);
router.post('/add', empleadosController.save);
router.get('/update/:id', empleadosController.edit);
router.post('/update/:id', empleadosController.update);
router.get('/delete/:id', empleadosController.delete);

module.exports = router;