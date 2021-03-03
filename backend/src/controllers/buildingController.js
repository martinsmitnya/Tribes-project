import { buildingService } from '../services';

export const buildingController = {
  async get(req, res) {
    let data = await buildingService.getBuilding();
    res.status(200).json(data);
  },
};