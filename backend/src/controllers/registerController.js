import { registerService } from '../services';
import { passwordEncrypter } from '../middlewares/passwordEncrypter';

export const registerController = {
  async post(req, res) {
    let encryptedPassword = await passwordEncrypter.encrypt(req.body.passwordhash);

    let data = await registerService.postRegister(
      req.body.username,
      encryptedPassword
    );
    res.status(data.status).json(data);
  },
};