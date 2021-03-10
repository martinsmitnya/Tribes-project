import { updatedResource } from '../middlewares/resource_update';
import { resourceRepository } from '../repositories/resource';

export const resourceService = {
  async getResource() {
    try {
      const result = await resourceRepository.getResourceByKingdomId(1);
      return updatedResource(result);
    } catch (err) {
      return err;
    }
  },
};
