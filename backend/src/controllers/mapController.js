import { mapService } from '../services/mapService'

export const mapController = {
  async get(req, res) {
    let data = await mapService.getKingdoms();
    console.log('Ez a data:'+ data)
    res.status(200).json(data);
  },
};
