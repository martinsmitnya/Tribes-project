import { loginService } from '../services'

export const loginController = {
  async get(req, res) {
    let data = await loginService.postLogin(req.body);
    
    res.status(200).json(data);
  }
}