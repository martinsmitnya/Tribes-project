import { updatedResource } from '../middlewares/resource_update';
import { resource } from '../models/resource';

export const resourceService = {
  async getResource() {
    const result = await resource;
    return updatedResource(result);
  },
};
