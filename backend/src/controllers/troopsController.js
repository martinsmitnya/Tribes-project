import { kingdomService } from '../services';

export const troopsController = {
  async get(req, res) {
    if (req.body.token) {
      let data = await kingdomService.getTroops(req.body.token.user_id);
      res.status(data.status).json(data.message);
    } else {
      res.status(500).send('There is no Token');
    }
  },
};