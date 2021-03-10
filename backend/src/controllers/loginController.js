import { loginService } from '../services'

export const loginController = {
  async post(req, res) {
    try{
      let serviceResponse = await loginService.postLogin(req.body);
      res.status(200).json(serviceResponse.data);
     
    }catch(err){
      res.status(err.status).json(err.message);
    }

  }
}