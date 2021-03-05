import { settingsService } from '../services';

export const settingsController = {
  async put(req, res) {
    try {
      let data = await settingsService.putSettings(req.body.kingdomName);
      res.status(200).json(data);
    } catch(error) {
      console.log(error);
      res.status(500).json({ error: 'Database error' });
    }
  } 
};