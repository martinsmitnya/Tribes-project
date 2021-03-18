import { db } from '../data/connection';

export const buildingRepository = {
  async getBuildingInfoByKingdomId(kingdomId) {
    const query = `SELECT building_id,type,level,hp,started_at,finished_at FROM buildings WHERE kingdomId = ?;`;
    const values = [kingdomId];
    try {
      const data = await db.query(query, values);
      return data.results;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },
};