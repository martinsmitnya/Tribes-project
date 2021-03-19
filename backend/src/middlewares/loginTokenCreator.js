import { userRepository } from '../repositories/user';
import { kingdomRepository } from '../repositories/kingdom';
const jwt = require('jsonwebtoken');

const privateKey = 'secretkeycode';

export const loginTokenCreator = {
  async tokenCreator(requestBody) {
    //Run the query
    let queryArray = await userRepository.getUserByUsernameAndPassword(
      requestBody.username,
      requestBody.password
    );
    let KingdomName = await kingdomRepository.getKingdomByUserId(queryArray[0].user_id);
    console.log('Query array: ', queryArray, KingdomName);

    if (queryArray.length < 1) {
      throw { status: 406, message: 'Username or password is incorrect.' };
    } else if (
      queryArray[0].username === requestBody.username &&
      queryArray[0].passwordhash === requestBody.password
    ) {
      //Generate JWT token
      let token = jwt.sign({ userid: queryArray[0].user_id, kindomName: KingdomName }, privateKey);
      return {
        status: 200,
        data: { status: 200, token: token },
      };
    }
  },
};
