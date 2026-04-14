const router = require('express').Router();
const controller = require('../controller/controller');

//Hovedsiden
router.get('/', controller.index);

//Sender score til en spesefik fox ved bruk av foxid
router.post('/score/:foxId', controller.sendScore);

module.exports = router;
