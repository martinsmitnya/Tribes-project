import { newBuildingService } from '../services';

export const newBuildingController = {
  async post(req, res) {
    console.log(req.body);
    let data = await newBuildingService.postBuilding(
      req.body.type,
      req.body.hp,
      req.body.end
    );
    res.status(200).json(data);
  },
};
