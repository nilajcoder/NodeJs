const express = require('express');
const { first ,second} = require('../controller/cont');

const auth = require('../middleware/auth');

const router = express.Router();
router.get('/first', first);
router.get('/second',second)
router.get('/auth',auth,first)
module.exports = router;