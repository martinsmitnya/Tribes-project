import { userRepository } from '../repositories/user';
const jwt = require('jsonwebtoken');

const privateKey = 'secretkeycode'

export const loginTokenCreator = {
  async tokenCreator(requestBody) {
    //Run the query
    let queryArray = await userRepository.getUserByNameAndPassword(requestBody.username, requestBody.password);

    if (queryArray.length < 1) {
      return {
        status: 406,
        data: { 'status': 406, 'error': 'Username or password is incorrect.' }
      }

    } else if (queryArray[0].username === requestBody.username && queryArray[0].passwordhash === requestBody.password) {
      //Generate JWT token
      let token = jwt.sign({ 'userid': queryArray[0].user_id }, privateKey);

      return { 
        status: 200, 
        data: { 'status': 200, 'token': token } 
      }
    }
  }
}