import { kingdomRepository } from '../repositories/kingdom';

export const newBuildingService = {
  async postBuilding(body) {
    try {
      return kingdomRepository.insertBuildingByKingdomId(body, 1);
    } catch (error) {
      return error;
    }
  },
};
