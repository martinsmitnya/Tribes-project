import { updateKingdomName } from '../models/settings';

export const settingsService = {
  async putSettings(kingdomName) {
    if(!kingdomName) {
      throw {status: 400, message: "Name is required"}
    } else {
      return await updateKingdomName(kingdomName);
    }
  },
};