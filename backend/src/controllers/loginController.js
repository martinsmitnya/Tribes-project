import { loginService } from '../services'

export const loginController = {
  async post(req, res) {
    let serviceResponse = await loginService.postLogin(req.body);

    res.status(serviceResponse.status).json(serviceResponse.data);
  }
}