import { registerNewUser } from '../models/register';

export const registerService = {
    async postRegister(username, passwordhash) {
      return await registerNewUser(username, passwordhash);
    },
};