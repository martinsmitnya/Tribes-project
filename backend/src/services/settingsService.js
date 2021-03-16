import { kingdomRepository } from '../repositories/kingdom';
import { troopRepository } from '../repositories/troop';
import { resourceRepository } from '../repositories/resource';
import { buildingRepository } from '../repositories/building';

export const settingsService = {
  async putSettings(kingdom_name) {
    const trimmedkingdom_name = kingdom_name.trim();
    if(!trimmedkingdom_name) {
      throw {status: 400, message: "Name is required"}
    }
    const checkIfKingdomNameisValid = await kingdomRepository.getKingdomByKingdomName(trimmedkingdom_name);
    if(checkIfKingdomNameisValid) {
     throw { status: 400, message: 'Kingdom name is already taken'}
    }
   
    const updateKingdomName = await kingdomRepository.updateKingdomNameByKingdom_id(trimmedkingdom_name, 39);
   
    const kingdomInfo = await kingdomRepository.getKingdomInfoByKingdom_id(39);
    const buildingInfo = await buildingRepository.getBuildingInfoByKingdomId(1);
    const resourceInfo = await resourceRepository.getResourceInfoByKingdomId(1);
    const troopsInfo = await troopRepository.getTroopsInfoByKingdomId(1);

    const settingsResponse = {status: 200, data: {
      "kingdom_id" : kingdomInfo.id,
      "kingdom_name": kingdomInfo.kingdom_name,
      "userId": kingdomInfo.user_id,
      "buildings": buildingInfo,
      "resources": resourceInfo,
      "troops": troopsInfo,
      "location": kingdomInfo.location,
    }};
  
    return settingsResponse
  },
};