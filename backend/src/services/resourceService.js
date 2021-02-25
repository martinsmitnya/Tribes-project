import { updatedResource } from '../middlewares/resource_update';
import { resource } from '../models/resource';

export const resourceService = {
  async getResource() {
    console.log(resource);
    return updatedResource(resource);
  },
};
