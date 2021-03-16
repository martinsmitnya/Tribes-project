import { kingdomService } from '../services';

export const kingdomNameController = {
  async get(req, res) {
    try{
    let data = await kingdomService.getKingdom(req.query.id);
    res.status(200).json(data);}
    catch(err) {
      res.status(err.status).json(err.message)
    }
  },
};