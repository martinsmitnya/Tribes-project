import { kingdomRepository } from '../repositories/kingdom';
import { troopRepository } from '../repositories/troop';
import { resourceRepository } from '../repositories/resource';
import { buildingRepository } from '../repositories/building';

export const settingsService = {
  async putSettings(kingdom_name, token) {
    let kingdomId = null;
    if (token) {
      try {
        kingdomId = JSON.parse(token).kingdomId;
      } catch (err) {
        throw { status: 500, message: 'Invalid Token' };
      }
    } else {
      throw { status: 500, message: 'Missing Token' };
    }
    const trimmedkingdom_name = kingdom_name.trim();
    if (!trimmedkingdom_name) {
      throw { status: 400, message: 'Name is required' };
    }
    const checkIfKingdomNameisValid = await kingdomRepository.getKingdomByKingdomName(
      trimmedkingdom_name
    );
    if (checkIfKingdomNameisValid) {
      throw { status: 400, message: 'Kingdom name is already taken' };
    }

    const updateKingdomName = await kingdomRepository.updateKingdomNameByKingdom_id(
      trimmedkingdom_name,
      kingdomId
    );

    const kingdomInfo = await kingdomRepository.getKingdomInfoByKingdom_id(
      kingdomId
    );
    const buildingInfo = await buildingRepository.getBuildingInfoByKingdomId(
      kingdomId
    );
    const resourceInfo = await resourceRepository.getResourceInfoByKingdomId(
      kingdomId
    );
    const troopsInfo = await troopRepository.getTroopsInfoByKingdomId(
      kingdomId
    );

    const settingsResponse = {
      status: 200,
      data: {
        kingdom_id: kingdomInfo.id,
        kingdom_name: kingdomInfo.kingdom_name,
        userId: kingdomInfo.user_id,
        buildings: buildingInfo,
        resources: resourceInfo,
        troops: troopsInfo,
        location: kingdomInfo.location,
      },
    };

    return settingsResponse;
  },
};
