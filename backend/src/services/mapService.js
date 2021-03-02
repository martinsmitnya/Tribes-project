import { getKingdomsInfo } from '../models/registrationMap'


export const mapService = {
  async getKingdoms() {
    const kingdomsInfo = await getKingdomsInfo();
    return kingdomsInfo ;
  },
};