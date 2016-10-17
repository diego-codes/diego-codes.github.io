const pg = require('pg');
const {DB} = require('../../config');

const db = new pg.Pool(DB.CONNECTION);

module.exports = db;
