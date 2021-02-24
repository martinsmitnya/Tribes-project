import { db } from '../data/connection';
import { getLoginQuery } from '../data/getLoginQuery'

export const loginTokenCreator = {

  async tokenCreator(requestBody) {
    if(requestBody.username && !requestBody.password){
      return {
        status: 400, 
        data: {'error': 'Password is required.'} 
      }
    }else if(!requestBody.username && requestBody.password){
      return {
        status: 400, 
        data: {'error': 'Username is required.'} 
      }
    }else if(!requestBody.username && !requestBody.password){
      return {
        status: 400, 
        data: {'error': 'All fields are required.'} 
      }
    }


    
    try {
      return {
        status: 200, 
        data: {'Username': requestBody.username, 'password': requestBody.password} 
      }

    }catch(error){
      return {
        status: 500, 
        data: {'error': 'Internal database error'} 
      }
    }

  }

}


//conn.query(getLoginQuery)
//return await {'Username': requestBody.username, 'password': requestBody.password};