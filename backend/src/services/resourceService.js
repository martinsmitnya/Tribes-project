import { updatedResource } from '../middlewares/resource_update';

export const resourceService = {
  async getResource() {
    return updatedResource;
  },
};
