import { kingdomRepository } from '../repositories/kingdom';

export const oneBuildingService = {
  async getOneBuilding(buildingId) {
    if (!buildingId) {
      throw { message: 'Empty KingdomId', status: 400 }
    }
    const checkBuildingByBuildingId = await kingdomRepository.getBuildingInfoByBuildingId(buildingId);
    return checkBuildingByBuildingId;
  }
} 