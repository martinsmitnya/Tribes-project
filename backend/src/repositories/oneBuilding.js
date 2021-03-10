import { db } from '../data/connection';

export function getBuildingInfoByBuildingId (buildingId) {
  const query = `SELECT * FROM buildings WHERE building_id = ?;`;
  const values = [buildingId];
  try {
    const data = await db.query(query,values);
    return data.results[0];
  } catch (error) {
    throw {status:500, message: 'Database error'};
  }
}