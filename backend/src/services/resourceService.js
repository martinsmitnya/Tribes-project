import { resource } from '../models/resource';

export const resourceService = {
  async getResource() {
    return resource;
  },
};
