const db = require('../helpers/db');
const Promise = require('promise');

function getProjectTools(projectId) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT name FROM tools WHERE id IN (
        SELECT tool_id FROM project_tools WHERE project_id=${projectId}
      )`, (queryError, tools) => {
        if (queryError) {
          reject(queryError);
        }

        const toolNames = [];
        for (const tool of tools.rows) {
          toolNames.push(tool.name);
        }
        resolve(toolNames);
    });
  });
}

function getProjectRoles(projectId) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT name FROM roles WHERE id IN (
        SELECT role_id FROM project_roles WHERE project_id=${projectId}
      )`, (queryError, roles) => {
        if (queryError) {
          reject(queryError);
        }

        const roleNames = [];
        for (const role of roles.rows) {
          roleNames.push(role.name);
        }
        resolve(roleNames);
    });
  });
}

function getProjectImages(projectId) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT url, description
      FROM project_photos
      WHERE project_id=${projectId}`, (queryError, images) => {
        if (queryError) {
          reject(queryError);
        }

        const imagesData = [];
        for (const image of images.rows) {
          imagesData.push(image);
        }
        resolve(imagesData);
    });
  });
}

function getAll(callback) {
  db.query('SELECT id, title FROM projects ORDER BY title', (queryError, result) => {
    if (queryError) {
      return callback(queryError);
    }
    return callback(null, result.rows);
  });
}

function get(projectId, callback) {
  projectId = parseInt(projectId);

  db.query(`SELECT title, description, github_link, demo_link
  FROM projects
  WHERE id BETWEEN ${projectId} AND ${projectId + 1}`, (queryError, data) => {
    if (queryError) {
      return callback(queryError);
    }
    const result = data.rows[0];

    if (data.rows[1]) {
      result.next = projectId + 1;
    }
    Promise.all([getProjectRoles(projectId), getProjectTools(projectId), getProjectImages(projectId)])
      .then((data) => {
        result.roles = data[0];
        result.tools = data[1];
        result.images = data[2];
        callback(null, result);
      })
      .catch((error) => {
        callback(error);
      });
  });
}

module.exports = {
  getAll,
  get,
}
