import { registerNewUser } from '../models/register';

export const registerService = {
    async postRegister(username, passwordhash) {
      return registerNewUser(username, passwordhash);
    },
};