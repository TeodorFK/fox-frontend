const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/', controller.index);

router.post('/score/:foxId', controller.sendScore);

module.exports = router;
