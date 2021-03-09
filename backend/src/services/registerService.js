import { registerNewUser } from '../models/register';
import { passwordEncrypter } from '../middlewares/passwordEncrypter';

export const registerService = {
  async postRegister(username, password) {
    let data;
    if (password) {
      //Create encryption
      let encryptedPassword = await passwordEncrypter.encrypt(password);
      //Create encryption
      data = await registerNewUser(username, encryptedPassword)
    } else {
      data = { status: 401, error: 'Error!' };
    }
    return data
  },
};