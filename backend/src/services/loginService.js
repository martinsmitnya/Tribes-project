import { loginTokenCreator } from '../middlewares/loginTokenCreator';

export const loginService = {
  async postLogin(requestBody) {

    if (requestBody.username && !requestBody.password) {
      throw {status: 400, message: 'Password is required.'}
    
    } else if (!requestBody.username && requestBody.password) {
      throw {status: 400, message: 'Username is required.'}
     
    } else if (!requestBody.username && !requestBody.password) {
      throw {status: 400, message: 'All fields are required.'}
   
    } else if (requestBody.username && requestBody.password) { /*When username and pw is here*/
      //run the token creator middleware
      let tokenResponse = await loginTokenCreator.tokenCreator(requestBody);
      return tokenResponse
    }
  }
}