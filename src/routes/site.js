const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// newscontroller.index 
router.use('/search', siteController.search);
router.use('/', siteController.home); // luôn nằm dưới cùng

module.exports = router;