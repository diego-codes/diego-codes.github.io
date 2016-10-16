const express = require('express');
const path = require('path');
const router = express.Router();

const AboutController = require('./about');
const ProjectController = require('./project');

router.use('/about', AboutController);
router.use('/projects', ProjectController);

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
  res.end();
});

router.get('*', (req, res) => {
  res.render('404');
});

module.exports = router;