import { updatedResource } from '../middlewares/resource_update';
import { kingdomRepository } from '../repositories/kingdom';

export const resourceService = {
  async getResource() {
    try {
      const result = await kingdomRepository.getResourceByKingdomId(1);
      return updatedResource(result);
    } catch (err) {
      return err;
    }
  },
};
