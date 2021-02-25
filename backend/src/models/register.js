import config from '../config';

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    insecureAuth: true,
});

conn.connect((err) => {
    if(err) {
      console.log(err.toString());
    }
    console.log('Connected to mysql');
  });

export async function registerNewUser(username, passwordhash) {
    await conn.query(`INSERT INTO users (username, passwordhash) VALUES (?,?);`, [username, passwordhash], (err, rows) => {
        if(err) {
            console.log(err.toString());
        }
        console.log(rows);
    });
}