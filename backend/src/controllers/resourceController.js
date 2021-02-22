import { resourceService } from '../services';

export const resourceController = {
  async get(req, res) {
    let data = await resourceService.getResource();

    res.status(200).json(data);
  },
};
