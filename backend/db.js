const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '23Bai@70197',
  database: 'nlp_code_db',
  waitForConnections: true,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection FAILED:', err.message);
  } else {
    console.log('✅ Database connected successfully!');
    connection.release();
  }
});

module.exports = pool.promise();