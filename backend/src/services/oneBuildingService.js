import { getBuildingInfoByBuildingId } from '../repositories/oneBuilding';

export const oneBuildingService = {
  async getOneBuilding(buildingId) {
    if (!buildingId) {
      throw { message: 'Empty KingdomId', status: 400 }
    }
    const checkBuildingByBuildingId = await getBuildingInfoByBuildingId(buildingId);
    return checkBuildingByBuildingId;
  }
}