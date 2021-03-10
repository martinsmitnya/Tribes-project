import { kingdomRepository } from '../repositories/kingdom';

export const buildingService = {
  async getBuilding() {
    return kingdomRepository.getBuildingsByKingdomId(1);
  },
};
