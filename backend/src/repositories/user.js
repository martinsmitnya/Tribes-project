import { db } from '../data/connection';

export const userRepository = {
  async getUserByUsername(username) {
    const query = `SELECT * FROM users WHERE username=?`;
    const value = [username];
    try {
      const data = await db.query(query, value);
      return data.results[0];
    } catch (err) {
      throw { status: 500, message: 'Database error' };
    }
  },

  async insertNewUser(username, passwordhash) {
    const query = `INSERT INTO users (username, passwordhash) VALUES (?,?)`;
    const value = [username, passwordhash];
    try {
      const data = await db.query(query, value);
      return data.results.insertId;
    } catch (error) {
      throw { status: 500, message: 'Database error' };
    }
  },
  async getUserByUsernameAndPassword(username, passwordhash) {
    const query = 'SELECT * FROM users WHERE username = ? AND passwordhash= ?;';
    const value = [username, passwordhash];
    try {
      const data = await db.query(query, value);
      return data.results;
    } catch (error) {
      console.log('Query error' + error);
    }
  },

  async insertNewResource(kingdomId) {
    const query =
      'INSERT INTO resources (type,amount,generation,updated_at,kingdomId) VALUES (?,?,?,?,?)';
    const values1 = [
      'food',
      500,
      100,
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];
    const values2 = [
      'food',
      500,
      100,
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];
    try {
      await db.query(query, values1);
      await db.query(query, values2);
    } catch (error) {
      console.log(error);
      throw { status: 500, message: 'Database error' };
    }
  },

  async insertNewTownhall(kingdomId) {
    const query =
      'INSERT INTO buildings (type,level,hp,started_at,finished_at,kingdomId) VALUES (?,?,?,?,?,?)';
    const values = [
      'townhall',
      1,
      200,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];
    try {
      await db.query(query, values);
    } catch (error) {
      console.log(error);
      throw { status: 500, message: 'Database error' };
    }
  },

  async insertNewTroops(kingdomId) {
    const query =
      'INSERT INTO troops (level,hp,attack,defence,sustenance,started_at,finished_at,kingdom_id) VALUES (?,?,?,?,?,?,?,?)';
    const values1 = [
      1,
      10,
      5,
      5,
      5,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];
    const values2 = [
      2,
      20,
      15,
      10,
      15,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];
    const values3 = [
      3,
      30,
      25,
      15,
      25,
      Math.floor(Date.now() / 1000),
      Math.floor(Date.now() / 1000),
      kingdomId,
    ];

    try {
      await db.query(query, values1);
      await db.query(query, values2);
      await db.query(query, values3);
    } catch (error) {
      console.log(error);
      throw { status: 500, message: 'Database error' };
    }
  },
};
