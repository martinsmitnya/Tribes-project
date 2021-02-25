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
    }else if(requestBody.username && requestBody.password){
      //I need to setup database with proper table and implenent tokenization
      try {
        let rows = await db.query(getLoginQuery);
        for (let i =0; i < rows.length; i++) {
          if(rows[i].username === requestBody.username && rows[i].password === requestBody.password){
            //return token and staff
            //return token and staff
            //return token and staff
            //return token and staff
          } else {
            return {
              status: 406, 
              data: {'error': 'Username or password is incorrect.'} 
            }
          }
        }
      }catch(error){
        return {
          status: 500, 
          data: {'error': 'Internal database error'} 
        }
      }
      //I need to setup database with proper table and implenent tokenization

    }


    
    

  }

}


//conn.query(getLoginQuery)
//return await {'Username': requestBody.username, 'password': requestBody.password};


// try {
//   return {
//     status: 200, 
//     data: {'Username': requestBody.username, 'password': requestBody.password} 
//   }

// }catch(error){
//   return {
//     status: 500, 
//     data: {'error': 'Internal database error'} 
//   }
// }