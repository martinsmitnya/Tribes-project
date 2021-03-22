import { kingdomService } from '../services';

export const troopsController = {
  async get(req, res) {
    try {
      let data = await kingdomService.getTroops(req.headers.token);
      res.status(data.status).json(data.message);
    } catch (err) {
      return res.status(err.status).json(err.message);
    }
  },
};
