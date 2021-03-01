import { db } from '../data/connection';

export async function registerNewUser(username, password) {
  try {
    const result = await db.query(`SELECT * FROM users WHERE username = ?;`, [username]);
    if (result.results.length != 0) {
      return { status: 400, error: 'Username is already taken!' };
    } else if (result.results.length === 0) {
      db.query(`INSERT INTO users (username, passwordhash) VALUES (?,?);`, [username, password]);
      return { status: 200, data: 'Success!' };
    }
  } catch (err) {
    return { status: 401, error: 'Error!' };
  }
}
