var oracledb = require('oracledb');
var credentials = require('./credentials');

console.log('credentials', credentials);

exports.getSampleStudents = function(cb) {
  oracledb.getConnection({
    user          : credentials.user,
    password      : credentials.password,
    connectString : credentials.connectString
  },
  function(err, connection) {
    if (err) { console.error(err.message); return; }
    connection.execute(
      'SELECT FIRST_NAME, LAST_NAME, MAILING_STATE FROM STUDENTS',
      function(err, result) {
        if (err) {console.error(err.message); return; }
        cb(result);
        doRelease(connection);
      });

  });
  function doRelease(connection) {
    connection.release(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
}

exports.customSqlQuery = function(sqlQuery, cb) {
  console.log('custom query!!!');
  oracledb.getConnection({
    user          : credentials.user,
    password      : credentials.password,
    connectString : credentials.connectString
  },
  function(err, connection) {
    console.log('sqlQuery', sqlQuery);
    if (err) { console.error(err.message); return; }
    connection.execute(
      sqlQuery,
      function(err, result) {
        if (err) {console.error(err.message); return; }
        cb(result);
        doRelease(connection);
      });

  });
  function doRelease(connection) {
    connection.release(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
}
