const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/', controller.index);

router.post('/votes/:foxId', controller.sendVote);

module.exports = router;
