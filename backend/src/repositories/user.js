import { db } from '../data/connection';

export const userRepository = {
    async getUserByUsername (username) {
        const query = `SELECT * FROM users WHERE username=?`;
        const value = [username];
        try{
        const data = await db.query(query,value);
        return data.results[0];
        } catch (err) {
            throw {status: 500, message: 'Database error'}
        }
    },

    async insertNewUser(username, passwordhash) {
        const query = `INSERT INTO users (username, passwordhash) VALUES (?,?)`;
        const value = [username,passwordhash];
        console.log(query,value)
        try {
         const data = await db.query(query,value);
         return data.results.insertId;
        }
        catch(error) {
            throw {status:500, message: 'Database error'};
        }
    }

}