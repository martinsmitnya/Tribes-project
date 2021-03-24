import { kingdomService } from '../services';

export const buildingController = {
  async get(req, res) {
    try {
      let data = await kingdomService.getBuilding(req.headers.token);

      res.status(200).json(data.message);
    } catch (e) {
      console.log(e);
      res.status(e.status).json(e.message);
    }
  },
};
