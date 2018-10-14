const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return next(new Error('Something happened'));
  res.render('index', { title: 'Green' });
});

module.exports = router;
