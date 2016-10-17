const express = require('express');
const router = express.Router();
const {NAV} = require('../../config');

const title = NAV.ABOUT;

router.get('/', (req, res) => {
  res.render('about', {NAV, title});
});

module.exports = router;