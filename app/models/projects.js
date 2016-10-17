const db = require('../helpers/db');

const getAll = (callback) => {
  db.query('SELECT id, title FROM projects ORDER BY title', (queryError, result) => {
    if (queryError) {
      return callback(queryError);
    }
    return callback(null, result.rows);
  });
}

const getQuery = `
  SELECT title, description, github_link, demo_link
  FROM projects
  WHERE id`;

const getRolesQuery = `
  SELECT roles.name
  FROM roles, projects, project_roles
  WHERE project_roles.project_id=projects.id
  AND project_roles.role_id=roles.id
  AND projects.id=`;

const get = (projectId, callback) => {
  projectId = parseInt(projectId);
  db.query(`${getQuery} BETWEEN ${projectId} AND ${projectId + 1}`, (queryError, data) => {
    if (queryError) {
      return callback(queryError);
    }
    const result = data.rows[0];

    if (data.rows[1]) {
      result.next = projectId + 1;
    }

    db.query(`${getRolesQuery}${projectId}`, (queryError, roles) => {
      result.roles = [];
      for (const role of roles.rows) {
        result.roles.push(role.name);
      }
      return callback(null, result);
    });
  });
}

module.exports = {
  getAll,
  get,
}
