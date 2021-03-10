import { kingdomRepository } from '../repositories/kingdom';
import { updatedResource } from '../middlewares/resource_update';

export const kingdomService = {
  async getResource() {
    try {
      const result = await kingdomRepository.getResourceByKingdomId(1);
      return updatedResource(result);
    } catch (err) {
      return err;
    }
  },

  async getBuilding() {
    return kingdomRepository.getBuildingsByKingdomId(1);
  },

  async postBuilding(body) {
    if (body.type === 'farm' || body.type === 'mine') {
      (body.hp = 100), (body.end = 60), (body.price = 100);
    } else if (body.type === 'academy') {
      (body.hp = 150), (body.end = 90), (body.price = 150);
    } else {
      throw { status: 401, message: 'Not a valid building type' };
    }
    try {
      return kingdomRepository.insertBuildingByKingdomId(body, 1);
    } catch (error) {
      return error;
    }
  },
};
