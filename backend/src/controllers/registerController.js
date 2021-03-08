import { registerService } from '../services';
import { passwordEncrypter } from '../middlewares/passwordEncrypter';

export const registerController = {
  async post(req, res) {
    let data;
    if (req.body.passwordhash) {
      let encryptedPassword = await passwordEncrypter.encrypt(req.body.passwordhash);
      data = await registerService.postRegister(
        req.body.username,
        encryptedPassword
      );
    } else {
      data = { status: 401, error: 'Error!' };
    }
    res.status(data.status).json(data);
  },
};