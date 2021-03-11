import { db } from '../data/connection';

export const resourceRepository = {
  async getResourceByKingdomId(kingdomId) {
    const query = 'SELECT * FROM resources WHERE kingdomId=?;';
    const values = [kingdomId];
    try {
      const data = await db.query(query, values);
      return data.results;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },
};
