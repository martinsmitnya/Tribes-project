import { registerNewUser } from '../models/register';

export const registerService = {
    async postRegister(username, passwordhash, kingdom_name) {
      if (kingdom_name === '') {
        kingdom_name = `${username}'s kingdom`;
      }
      return await registerNewUser(username, passwordhash, kingdom_name);
    },
};