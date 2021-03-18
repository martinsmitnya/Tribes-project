
import { settingsService } from '../services';

export const settingsController = {
  async put(req, res) {
    try {
      let response = await settingsService.putSettings(req.body.kingdom_name);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error)
      res.status(error.status).json(error.message);
    }
  } 
};