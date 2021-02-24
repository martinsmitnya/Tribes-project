import { getLoginQuery } from '../data/getLoginQuery'

export const loginTokenCreator = {
  
  async tokenCreator(requestBody) {
    await function querries(requestBody){

      //conn.query(getLoginQuery)
    }
    return await {'Username': requestBody.username, 'password': requestBody.password};
  }

}