import { oneBuildingService } from '../services/oneBuildingService'

export const oneBuildingContoroller = {
  async get (req,res) {
    try {
      const buildingId = req.params.buildingId;
      let data = await oneBuildingService.getOneBuilding(buildingId);
      res.status(200).json(data);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
}