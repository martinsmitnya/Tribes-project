import { kingdomService } from '../services';

export const buildingController = {
  async get(req, res) {
    let data = await kingdomService.getBuilding();
    res.status(data.status).json(data.message);
  },
};