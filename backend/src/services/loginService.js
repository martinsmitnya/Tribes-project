import { loginTokenCreator } from '../data/loginTokenCreator';

export const loginService = {
  async postLogin(requestBody) {
    let sqlResponse = await loginTokenCreator.tokenCreator(requestBody);
    return sqlResponse
  }
}