const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('projects/index');
});

module.exports = router;