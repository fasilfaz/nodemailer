const router = require('express').Router();

const {signup , getBill} = require('../controller/appController.js')

// HTTP Reqeust

router.post('/user/signup', signup)
router.post('/product/getBill' , getBill)

module.exports = router;