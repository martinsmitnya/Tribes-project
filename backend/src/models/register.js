import { db } from '../data/connection';
import { addKingdom, getUserId, getSameKingdomName } from '../data/addKindomQuery';
import { add } from 'winston';

export async function registerNewUser(username, password, kingdom_name) {

  try {
    const result = await db.query(`SELECT * FROM users WHERE username = ?;`, [username]);
    if (result.results.length != 0) {
      return { status: 400, error: 'Username is already taken!' };

    } else if (result.results.length === 0) { //nincs ilyen user
      try {
        const insert = await db.query(`INSERT INTO users (username, passwordhash) VALUES (?,?);`, [username, password]);
      }
      catch (err) {
        return { status: 401, error : 'Username and passwordhash not succesfully inserted'};
      }

      //Kingdom already exists?
      let selectUserId;
      let add;
      try {
        const alreadyExistsCheck = await db.query(getSameKingdomName, [kingdom_name]);
        if (alreadyExistsCheck.results.length !== 0) { //van ilyen már...
          return { status: 400, error: 'Kingdomname already taken!'};
  
        } else { //if NOT:
          try {
            selectUserId = await db.query(getUserId);
            add = await db.query(addKingdom, [kingdom_name, selectUserId.results[0].user_id])
          }
          catch (err) {
            return { status: 401, error : 'Kingdom not succesfully added'};
          }
  
        }
      }
      catch (err) {
        return { status: 400, error: 'alreadyExistsCheck failed!'};
      }
      return { status: 200, data: { //insert.results.insertId !!!
        "user_id" : selectUserId.results[0].user_id,
        "username" : username,
        "kingdomId" : add.results.insertId,
      } };
    }
  } catch (err) {
    console.log(err);
    return { status: 401, error: 'Error!' };
  }
}
