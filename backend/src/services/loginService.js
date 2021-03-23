import { loginTokenCreator } from '../middlewares/loginTokenCreator';
import { userRepository } from '../repositories/user'
const bcrypt = require('bcrypt');

export const loginService = {
  async postLogin(requestBody) {
    if (requestBody.username && !requestBody.password) {
      throw {status: 400, message: 'Password is required.'};
    } else if (!requestBody.username && requestBody.password) {
      throw {status: 400, message: 'Username is required.'};
    } else if (!requestBody.username && !requestBody.password) {
      throw {status: 400, message: 'All fields are required.'};
    } else if (requestBody.username && requestBody.password) {
      
    let userData = await userRepository.getUserByUsername(
      requestBody.username,
    );

    if (!userData) {
      throw {status: 400, message: 'Wrong username'}
    }

    let validLogin = bcrypt.compareSync(requestBody.password,userData.passwordhash, (err,bool) => {
      if (err) {
        throw {status:500, message: 'Bcrypt is not working'}
      }
    })

    if (!validLogin){
      throw {status:400, message: 'Wrong username or password'};
    }

    try {
      let tokenResponse = await loginTokenCreator.tokenCreator(requestBody);
      return tokenResponse;
    } catch (error) {
      throw { status: 400, message: 'Failed to create Token' };
    }
    }
  },
};
