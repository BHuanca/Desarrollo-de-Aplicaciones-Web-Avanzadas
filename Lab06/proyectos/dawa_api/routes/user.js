const express = require('express');
var bodyParser = require('body-parser');
const router  = express.Router();

const userController = require('../controllers/user');

//var jsonParser = bodyParser.json();

//var urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.urlencoded({ extended: false });
router.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

router.get('/', userController.find);
router.get('/:id', userController.findOne);
router.post('/',userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

// Para que funcione verifiToken -> Nose si es aca
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/refresh', userController.refreshToken);

router.use(userController.verifyToken);

module.exports = router;
