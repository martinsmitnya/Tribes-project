import { registerNewUser } from '../models/register';

export const registerService = {
    async postRegister(username, passwordhash, kingdom_name) {
      return await registerNewUser(username, passwordhash, kingdom_name);
    },
};