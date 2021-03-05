import { building } from '../models/building';

export const buildingService = {
  async getBuilding() {
    return building();
  },
};
