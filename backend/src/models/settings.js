import { db } from '../data/connection';


export async function updateKingdomName(kingdomName) {
  try{
    const settingsquery = `UPDATE kingdoms SET kingdom_name = ? WHERE  id = 39;`;    
    const result = await db.query(settingsquery,[kingdomName]);
    const kingdomInfoQuery = `SELECT * FROM kingdoms WHERE id = 39`
    const kingdomInfo = await db.query(kingdomInfoQuery);
    const buildingInfoQuery = `SELECT building_id,type,level,hp,started_at,finished_at FROM buildings WHERE kingdomId=1;`
    const buildingInfo = await db.query(buildingInfoQuery);
    const resourceInfoQuery = `SELECT type, amount, generation FROM resources WHERE kingdomID = 1;;`
    const resourceInfo = await db.query(resourceInfoQuery);
    const troopsInfoQuery = `SELECT id, level, hp, attack, defence, started_at, finished_at FROM troops Where kingdom_id = 1;`
    const troopsInfo = await db.query(troopsInfoQuery);
    console.log(troopsInfo.results)

    return {status: 200, data: {
        "kingdom_id" : kingdomInfo.results[0].id,
        "kingdom_name": kingdomInfo.results[0].kingdom_name,
        "userId": kingdomInfo.results[0].user_id,
        "buildings": buildingInfo.results,
        "resources": resourceInfo.results,
        "troops": troopsInfo.results,
        "location": kingdomInfo.results[0].location,
    }
    };
  } catch (err) {
    return {status: 400, error:'Kingdomname not succesfully updated'}
  }
}