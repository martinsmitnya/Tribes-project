import { newBuildingService } from '../services';

export const newBuildingController = {
  async post(req, res) {
    let data = await newBuildingService.postBuilding();
    res.status(data.status).json(data);
  },
};
