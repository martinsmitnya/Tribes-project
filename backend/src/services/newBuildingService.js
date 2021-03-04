import { newBuilding } from '../models/newBuilding';

export const newBuildingService = {
  async postBuilding(type, hp, end) {
    return newBuilding(type, hp, end);
  },
};
