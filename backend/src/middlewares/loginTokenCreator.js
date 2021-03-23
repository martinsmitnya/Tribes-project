import { kingdomRepository } from '../repositories/kingdom';
import { userRepository } from '../repositories/user';
const jwt = require('jsonwebtoken');

const privateKey = 'secretkeycode';

export const loginTokenCreator = {
  async tokenCreator(requestBody) {
    let userData = await userRepository.getUserByUsername(
      requestBody.username,
    );

    let kingdomData = await kingdomRepository.getKingdomInfoByUserId(userData.user_id);

    console.log('KINGDOM DATA', kingdomData)

    let token = jwt.sign({
      userid: kingdomData.user_id,
      kingdomId: kingdomData.id, 
      kingdomName: kingdomData.kingdom_name, 
    }, privateKey);

    console.log('TOKEN VALUES', {
      userid: userData.user_id,   
      kingdomId: kingdomData.id, 
      kingdomName: kingdomData.kingdom_name, 
    })
    console.log('TOKEN', token)

    return {
      status: 200,
      data: { status: 200, token: token },
    };
  }
}