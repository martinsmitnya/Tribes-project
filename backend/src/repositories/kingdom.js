import { db } from '../data/connection';

export const kingdomRepository = {
  async getKingdomByKingdomName(kingdom_name) {
    const query = `SELECT * FROM kingdoms WHERE kingdom_name = ?`;
    const values = [kingdom_name];
    try {
      const data = await db.query(query, values);
      return data.results[0];
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },

  async insertKingdom(kingdom_name, userId) {
    const query = `INSERT INTO kingdoms (kingdom_name, user_id) VALUES(?,?)`;
    const values = [kingdom_name, userId];
    try {
      const data = await db.query(query, values);
      return data.results.insertId;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },

  async getResourceByKingdomId(kingdomId) {
    const query = 'SELECT * FROM resources WHERE kingdomId=1;';
    const values = [kingdomId];
    try {
      const data = await db.query(query, values);
      return data.results;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },

  async getBuildingsByKingdomId(kingdomId) {
    const query =
      'SELECT building_id,type,level,hp,started_at,finished_at FROM buildings WHERE kingdomId=?;';
    const values = [kingdomId];
    try {
      const data = await db.query(query, values);
      return data.results;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },
};
