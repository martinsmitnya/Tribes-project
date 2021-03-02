import { loginService } from '../services'

export const loginController = {
  async post(req, res) {
    let sqlResponse = await loginService.postLogin(req.body);

    res.status(sqlResponse.status).json(sqlResponse.data);
  }
}