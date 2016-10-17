const express = require('express');
const Projects = require('../models/projects');
const router = express.Router();

router.get('/', (req, res) => {
  Projects.getAll((error, projects) => {
    if (error) {
      res.redirect('/');
      throw error;
    }
    res.render('projects/index', {projects});
  })
});

router.get('/:id', (req, res) => {
  Projects.get(req.params.id, (error, project) => {
    res.render('projects/project', {project});
  });
});
module.exports = router;