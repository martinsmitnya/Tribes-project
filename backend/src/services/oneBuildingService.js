import { getBuildingInfoByBuildingId } from '../repositories/oneBuilding';

export const oneBuildingService = {
  async getOneBuilding(buildingId) {
    //if (!buildingId){ throw error!}
    const checkBuildingByBuildingId = await getBuildingInfoByBuildingId(buildingId);
  }
}