import { newBuildingService } from '../services';

export const newBuildingController = {
  async post(req, res) {
    let data = await newBuildingService.postBuilding(req.body);
    res.status(data.status).json(data);
  },
};
