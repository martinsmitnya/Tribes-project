import { settingsService } from '../services';

export const settingsController = {
  async put(req, res) {
    try {
      let response = await settingsService.putSettings(
        req.body.kingdom_name,
        req.headers.token
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  },
};
