import { kingdomService } from '../services';

export const newBuildingController = {
  async post(req, res) {
    let data = await kingdomService.postBuilding(req.body, req.headers.token);
    res.status(data.status).json(data.message);
  },
};
