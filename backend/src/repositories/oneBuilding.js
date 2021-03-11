import { db } from '../data/connection';

export async function getBuildingInfoByBuildingId (buildingId) {
  const query = `SELECT * FROM buildings WHERE building_id = ?;`;
  const values = [buildingId];
  try {
    const data = await db.query(query,values);
    if (data.results.length === 0) {
    throw { status: 400, message: 'No buildingId like this'};
  }
    return data.results[0];
  } catch (error) {
    return { status: error.status, message: error.message };
  }
}