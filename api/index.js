const express = require('express');
const router = express.Router();

const contact = require('./controllers/contact');

const looger = require('./middlewares/logger');

router.use(looger);
router.use('/contact', contact);

module.exports = router;
