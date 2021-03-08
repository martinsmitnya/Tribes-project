import { settingsService } from '../services';

export const settingsController = {
  async put(req, res) {
    try {
      let response = await settingsService.putSettings(req.body.kingdomName);
      res.status(response.status).json(response.data);
    } catch (error) {
      console.log(error.status)
      res.status(error.status).json(error.message);
    }
  } 
};