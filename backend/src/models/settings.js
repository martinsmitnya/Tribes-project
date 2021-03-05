import { db } from '../data/connection';

export async function updateKingdomName(kingdomName) {
  try {
    const settingsquery = `UPDATE kingdoms SET kingdom_name = ? WHERE  id = 1;`;    
    const result = await db.query(settingsquery,[kingdomName]);
    console.log(data.results)
    return data.results;
  } catch (error) {
    console.log(error);
    throw { message: 'database error', statusCode: 500}
  }
}