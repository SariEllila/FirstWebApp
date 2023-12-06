const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/product');


router.get('/', controller.findAll);

router.post('/add', controller.add);

router.post('/delete', controller.del);

router.post('/update', controller.update);

module.exports = router;