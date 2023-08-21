const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newscontroller.index 
router.use('/:slug', newsController.show);
router.use('/', newsController.index); // luôn nằm dưới cùng

module.exports = router;