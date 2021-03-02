import { getKingdomsInfo } from '../models/registrationMap'


export const mapService = {
  async getKingdoms() {
    const kingdomsInfo = await getKingdomsInfo();
    console.log('Ezt nézzük:' + kingdomsInfo)
    return kingdomsInfo ;
  },
};