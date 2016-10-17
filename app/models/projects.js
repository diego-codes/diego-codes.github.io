const db = require('../helpers/db');

const getAll = (callback) => {
  db.query('SELECT project_id, title FROM projects ORDER BY title DESC', (queryError, result) => {
    if (queryError) {
      return callback(queryError);
    }
    return callback(null, result.rows);
  });
}

const getQuery = `
  SELECT title, description, github_link, demo_link
  FROM projects
  WHERE project_id=`;

const get = (projectId, callback) => {
  db.query(`${getQuery}${projectId}`, (queryError, result) => {
    if (queryError) {
      return callback(queryError);
    }
    return callback(null, result.rows[0]);
  });
}

module.exports = {
  getAll,
  get,
}
