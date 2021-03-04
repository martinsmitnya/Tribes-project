import { newBuildingService } from '../services';

export const newBuildingController = {
  async post(req, res) {
    let data = await newBuildingService.postBuilding(
      req.body.type,
      req.body.hp,
      req.body.end
    );
    res.status(data.status).json(data);
  },
};
