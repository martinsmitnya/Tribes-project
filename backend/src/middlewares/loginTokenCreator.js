import { db } from '../data/connection';
import { getLoginQuery } from '../data/getLoginQuery'
const jwt = require('jsonwebtoken');

const privateKey = 'secretkeycode'

export const loginTokenCreator = {

  async tokenCreator(requestBody) {
    if (requestBody.username && !requestBody.password) {
      return {
        status: 400,
        data: { 'error': 'Password is required.' }
      }
    } else if (!requestBody.username && requestBody.password) {
      return {
        status: 400,
        data: { 'error': 'Username is required.' }
      }
    } else if (!requestBody.username && !requestBody.password) {
      return {
        status: 400,
        data: { 'error': 'All fields are required.' }
      }
    } else if (requestBody.username && requestBody.password) { /*When username and pw is here*/
      //query results saved to queryArray
      let queryResults ={};
      try {
        queryResults = await db.query(getLoginQuery);
      }catch (error) {
        console.log(error)
      }
      let queryArray = queryResults.results;
      //Check the user or say its not good
      for (let i = 0; i < queryArray.length; i++) {
        if (queryArray[i].username === requestBody.username && queryArray[i].passwordhash === requestBody.password) {

         //Generate JWT token
         let token = jwt.sign({ 'username': queryArray[i].username, 'password': queryArray[i].passwordhash}, privateKey);
         
         return { status: 200, data: {'status': 200,'token': token} }
        } else {
          return {
            status: 406,
            data: { 'error': 'Username or password is incorrect.' }
          }
        }
      }

    } //query with username, and pw ended

  }

}