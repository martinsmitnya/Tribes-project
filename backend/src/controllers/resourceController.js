import { kingdomService } from '../services';

export const resourceController = {
  async get(req, res) {
    let data = await kingdomService.getResource();
    res.status(200).json(data);
  },
};
