import { db } from '../data/connection';

export const troopRepository = {
  async getTroopsInfoByKingdomId(kingdom_id) {
    const query = `SELECT id, level, hp, attack, defence, started_at, finished_at FROM troops Where kingdom_id = ?;`;
    const values = [kingdom_id];
    try {
      const data = await db.query(query, values);
      return data.results;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },
};