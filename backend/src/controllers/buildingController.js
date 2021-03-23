import { kingdomService } from '../services';

export const buildingController = {
  async get(req, res) {
    console.log(req.headers)
    try{
    let data = await kingdomService.getBuilding(req.headers);
    res.status(200).json(data.message);
    }
    catch(e){
      res.status(e.status).json(e.message);
    }
  },
};