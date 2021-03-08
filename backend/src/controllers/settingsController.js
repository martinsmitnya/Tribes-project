import { settingsService } from '../services';

export const settingsController = {
  async put(req, res) {
    try {
      let data = await settingsService.putSettings(req.body.kingdom_name);
      res.status(200).json(data.data);
    } catch(error) {
      console.log(error);
      res.status(500).json({ error: 'Database error' });
    }
  } 
};