import { updateKingdomName } from '../models/settings';

export const settingsService = {
  async putSettings(kingdomName) {
    return await updateKingdomName(kingdomName);
  },
};