import { mapService } from '../services/mapService'

export const mapController = {
  async get(req, res) {
    try {
      let data = await mapService.getKingdoms();
      res.status(200).json(data);
    } catch(error) {
      res.status(500).json(error)
    }
  },
};
