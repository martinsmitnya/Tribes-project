import { updateKingdomName } from '../models/settings';

export const settingsService = {
  async putSettings(kingdomName) {
    if(!kingdomName) {
      return {status: 400, error: "Name is required"}
    } else {
      return await updateKingdomName(kingdomName);
    }
  },
};