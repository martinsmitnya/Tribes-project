import { kingdomService } from '../services';

export const resourceController = {
  async get(req, res) {
    let data = await kingdomService.getResource(req.headers.token);
    res.status(200).json(data);
  },
};
