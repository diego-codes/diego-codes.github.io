const express = require('express');
const router = express.Router();

const Projects = require('../models/projects');
const {NAV} = require('../../config');

const title = NAV.PROJECTS;

router.get('/', (req, res) => {
  Projects.getAll((error, projects) => {
    if (error) {
      res.redirect('/');
      throw error;
    }
    res.render('projects/index', {NAV, title, projects});
  })
});

router.get('/:id', (req, res) => {
  Projects.get(req.params.id, (error, project) => {
    res.render('projects/project', {NAV, title, project});
  });
});
module.exports = router;