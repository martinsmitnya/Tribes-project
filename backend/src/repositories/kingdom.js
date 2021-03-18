import { db } from '../data/connection';
import { updatedResource } from '../middlewares/resource_update';

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
    const query = 'SELECT * FROM resources WHERE kingdomId=?;';
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
      return { status: 200, message: data.results };
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },

  async insertBuildingByKingdomId(body, kingdomId) {
    const query =
      'INSERT INTO buildings (type,level,hp,started_at,finished_at,kingdomId) VALUES (?,1,?,?,?,?);';
    const values = [
      body.type,
      body.hp,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000) + body.end,
      kingdomId,
    ];

    const goldAmount = await db.query(
      'SELECT amount FROM resources WHERE type=? AND kingdomId=?;',
      ['gold', kingdomId]
    );
    try {
      if (body.price > goldAmount.results[0].amount) {
        return { status: 401, message: 'Not enough gold' };
      } else {
        await db.query(query, values);
        const pastResource = await this.getResourceByKingdomId(kingdomId);
        pastResource[1].amount -= body.price;
        console.log();
        updatedResource(pastResource);
        return { status: 200, message: 'Building created' };
      }
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },

<<<<<<< HEAD
  async getBuildingInfoByBuildingId (buildingId) {
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
=======
  async updateKingdomNameByKingdom_id(kingdom_name, kingdom_id) {
    const query = `UPDATE kingdoms SET kingdom_name = ? WHERE  id = ?;`;
    const values = [kingdom_name, kingdom_id];
    try {
      const data = await db.query(query, values);
      return data.results.insertId;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },  

  async getKingdomInfoByKingdom_id(kingdom_id) {
    const query = `SELECT * FROM kingdoms WHERE id = ?`;
    const values = [kingdom_id];
    try {
      const data = await db.query(query, values);
      return data.results[0];
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  }, 
>>>>>>> origin/development

};
