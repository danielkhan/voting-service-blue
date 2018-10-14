const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.status(500);
  // res.render('index', { title: 'Green' });
});

module.exports = router;
