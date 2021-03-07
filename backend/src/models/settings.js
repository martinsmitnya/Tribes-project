import { db } from '../data/connection';

export async function updateKingdomName(kingdomName) {
    const settingsquery = `UPDATE kingdoms SET kingdom_name = ? WHERE  id =33;`;    
    const result = await db.query(settingsquery,[kingdomName]);
    console.log(result.results)
    return result.results;
 
}