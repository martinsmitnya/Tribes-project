import { db } from '../data/connection';
import { getLoginQuery } from '../data/getLoginQuery'
const jwt = require('jsonwebtoken');

const privateKey = 'secretkeycode'

export const loginTokenCreator = {

  async tokenCreator(requestBody) {
    if (requestBody.username && !requestBody.password) {
      return {
        status: 400,
        data: { 'status': 400, 'error': 'Password is required.' }
      }
    } else if (!requestBody.username && requestBody.password) {
      return {
        status: 400,
        data: { 'status': 400, 'error': 'Username is required.' }
      }
    } else if (!requestBody.username && !requestBody.password) {
      return {
        status: 400,
        data: { 'status': 400, 'error': 'All fields are required.' }
      }
    } else if (requestBody.username && requestBody.password) { /*When username and pw is here*/
      //query results saved to queryArray
      let queryResults = {};
      try {
        queryResults = await db.query(getLoginQuery, [requestBody.username]);
      } catch (error) {
        console.log(error)
      }
      let queryArray = queryResults.results;
      //Check the user or say its not good

      if (queryArray.length < 1) {
        return {
          status: 406,
          data: { 'status': 406, 'error': 'Username or password is incorrect.' }
        }
        
      } else if (queryArray[0].username === requestBody.username && queryArray[0].passwordhash === requestBody.password) {
        
        //Generate JWT token
        let token = jwt.sign({ 'userid': queryArray[0].user_id}, privateKey);
        console.log(queryArray[0].user_id)

        return { status: 200, data: { 'status': 200, 'token': token } }
      }

    } //query with username, and pw ended

  }

}