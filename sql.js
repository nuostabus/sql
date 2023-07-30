const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  database: '30_june',
});

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      //wrapping connection.query in a promise
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
}

async function demo() {
  const result = await asyncMySQL(
    `INSERT INTO users (name, age) VALUES ("MO", 100) `
  );
  const result2 = await asyncMySQL(
    `INSERT INTO users (name, age) VALUES ("MO2", 100) `
  );
  const result3 = await asyncMySQL(
    `INSERT INTO users (name, age) VALUES ("MO3", 100) `
  );
}

connection.query(`SELECT name FROM users`, (error, result) => {
  console.log(error, result);
});

demo();
