import { db } from '../data/connection';
import { addKingdom, getUserId } from '../data/addKindomQuery';

export async function registerNewUser(username, password, kingdom_name) {
  try {
    const result = await db.query(`SELECT * FROM users WHERE username = ?;`, [username]);
    if (result.results.length != 0) {
      return { status: 400, error: 'Username is already taken!' };
    } else if (result.results.length === 0) {
      try {
        const insert = await db.query(`INSERT INTO users (username, passwordhash) VALUES (?,?);`, [username, password]);
      }
      catch (err) {
        return { status: 401, error : 'Username and passwordhash not succesfully inserted'};
      }
      try {
        const selectUserId = await db.query(getUserId);
        const add = await db.query(addKingdom, [kingdom_name, selectUserId.results[0].user_id])
      }
      catch (err) {
        return { status: 401, error : 'Kingdom not succesfully added'};
      }
      return { status: 200, data: 'Success!' };
    }
  } catch (err) {
    return { status: 401, error: 'Error!' };
  }
}
