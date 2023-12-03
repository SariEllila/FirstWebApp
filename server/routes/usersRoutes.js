const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/user');

    const jwt = require("jsonwebtoken");
    const validator = require("validator");
    const jwt_secret = process.env.JWT_SECRET;


router.get('/', controller.findAll);

router.post('/add', controller.add);

router.post('/delete', controller.del);

router.post('/update', controller.update);

router.post('/verify_token', controller.verify_token);

router.post('/register', controller.register);

router.post('/login', controller.login);

module.exports = router;